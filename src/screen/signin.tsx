import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {colors, icons} from '../constant/colors';
import {fontSizes, iconSizes, spacing} from '../constant/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { fontFamilies } from '../constant/fontFamilies';
import DividerWithText from '../component/divider';
import CustomInput from '../component/TextInput';
import { LoginValidationSchema } from '../component/validations';
import { useFormik } from 'formik';
import { IAppScreen } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { tabletContainer } from '../utils/helpts';

function SignIn() {

    const { width } = useWindowDimensions();
    const isTablet = width > 600;
const navigator = useNavigation()
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: LoginValidationSchema,
        onSubmit: (values) => {
          console.log('Form values:', values);
        },
      });

  return (
    <SafeAreaView style={[styles.container, isTablet && tabletContainer as unknown as {}]}>
        <TouchableOpacity onPress={() => navigator.goBack()} style={styles.goBack}>
                <AntDesign
                  name="arrowleft"
                  color={icons.iconSecondary}
                  size={spacing.lg}
                />
              </TouchableOpacity>
    <KeyboardAvoidingView style={styles.container}>
      <View style={[styles.IconContainer,  isTablet && {marginVertical:spacing.sm, height:80, width:80}]}>
        <AntDesign
          name="login"
          color={icons.iconSecondary}
          size={spacing.xl}
          style={[styles.IconStyle, isTablet && { paddingVertical:spacing.sm,}]}
        />
      </View>
      <Text style={styles.textColor}>Sign In</Text>

      <Text style={[styles.paragraph, isTablet && {fontSize:spacing.lg}]}>Welcome back to your number one music player, we got you covered always</Text>
    
    <View style={styles.socialAuth}>
    <TouchableOpacity style={styles.groupedIconText}>
        <AntDesign name='facebook-square' color={colors.iconPrimary} size={iconSizes.md}/>
        <Text style={styles.normalText}>Facebook</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.groupedIconText}>
        <AntDesign name='google' color={colors.iconPrimary} size={iconSizes.md}/>
        <Text style={styles.normalText}>Google</Text>


    </TouchableOpacity>
    </View>
    <DividerWithText text="or" />  

     <View style={styles.form}>
      <CustomInput
        // label="Email"
        placeholder="Enter your email"
        value={formik.values.email}
        error={formik.errors.email}
        touched={formik.touched.email}
        onChangeText={formik.handleChange('email')}
        onBlur={() => formik.setFieldTouched('email')}
      />
      <CustomInput
        // label="Password"
        placeholder="Enter your password"
        value={formik.values.password}
        error={formik.errors.password}
        touched={formik.touched.password}
        onChangeText={formik.handleChange('password')}
        onBlur={() => formik.setFieldTouched('password')}
        isPassword={true}
      />
      <TouchableOpacity >
        <Text style={[styles.paragraph, {textAlign:'right', fontSize:fontSizes.sm, paddingTop:0}, isTablet && {fontSize:spacing.lg}]}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={formik.handleSubmit} style={styles.button} >
      <Text style={styles.textColor2}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigator.navigate(IAppScreen.SIGNUP as unknown as never)}  >
        <Text style={[styles.paragraph, { textAlign:'left', fontSize:fontSizes.md }, isTablet && {fontSize:spacing.lg}]}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View> 

    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  goBack:{
    textAlign:'left',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    color: colors.textPrimary,
    padding: spacing.md,
 },
  textColor: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: spacing.xl,
    fontWeight:'bold',
    fontFamily:fontFamilies.heavy,
  },
  textColor2: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: spacing.lg,
    fontWeight:'bold',
    fontFamily:fontFamilies.heavy
  },
  imageStyle: {},
  IconContainer:{
    backgroundColor:colors.lightBackground,
    width:100,
    height:100,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:spacing.xl,
    marginHorizontal:"auto",
  },
  IconStyle:{
    paddingVertical:spacing.xl,
    textAlign:'center'
  },
  paragraph:{
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: spacing.md,
    paddingVertical:spacing.lg,
    fontFamily:fontFamilies.light
},
socialAuth:{
    paddingVertical:spacing.xl,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:50,

},
normalText:{
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: spacing.md, 
    paddingHorizontal:spacing.sm
},
groupedIconText:{
    borderWidth:1,
    borderColor:colors.textSecondary,
    borderRadius:spacing.sm,
    padding:spacing.sm,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
},
form: {
    width:'100%',
    paddingTop: 30,

  },
  button:{
    borderWidth:1,
    borderColor:colors.lightBackground,
    backgroundColor:colors.lightBackground,
    padding:15,
    borderRadius:7,
    marginTop:20,
    textAlign:'center'
  }
});
