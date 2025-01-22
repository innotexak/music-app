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
import {fontFamilies} from '../constant/fontFamilies';
import DividerWithText from '../component/divider';
import CustomInput from '../component/TextInput';
import {SignUpValidationSchema} from '../component/validations';
import {useFormik} from 'formik';
import {IAppScreen} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {tabletContainer} from '../utils/helpts';
import {API_CALL} from '../utils/axiosInstance';

function SignUp() {
  const {width} = useWindowDimensions();
  const isTablet = width > 600;
  const navigator = useNavigation();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: async (values) => {
      console.log('Form values:', values);
      try {
        const response = await  API_CALL().post(`/api/v1/login`, values)
        console.log({response})
      } catch (error) {
        console.log(error)
        
      }
    },
  });

  return (
    <SafeAreaView
      style={[
        styles.container,
        isTablet && ((tabletContainer as unknown) as {}),
      ]}
    >
      <TouchableOpacity
        onPress={() => navigator.goBack()}
        style={styles.goBack}
      >
        <AntDesign
          name="arrowleft"
          color={icons.iconSecondary}
          size={spacing.lg}
        />
      </TouchableOpacity>
      <KeyboardAvoidingView style={styles.container}>
        <View
          style={[
            styles.IconContainer,
            isTablet && {marginVertical: spacing.sm, height: 80, width: 80},
          ]}
        >
          <AntDesign
            name="adduser"
            color={icons.iconSecondary}
            size={spacing.md}
            style={[
              styles.IconStyle,
              isTablet && {paddingVertical: spacing.sm},
            ]}
          />
        </View>
        <Text style={styles.textColor}>Sign Up</Text>

        <Text
          style={[
            styles.paragraph,
            isTablet && {paddingVertical: spacing.sm, fontSize: spacing.lg},
          ]}
        >
          Sign Up to your number one music player, we got you covered always
        </Text>

        <View
          style={[styles.socialAuth, isTablet && {paddingVertical: spacing.md}]}
        >
          <TouchableOpacity style={styles.groupedIconText}>
            <AntDesign
              name="facebook-square"
              color={colors.iconPrimary}
              size={iconSizes.md}
            />
            <Text style={styles.normalText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupedIconText}>
            <AntDesign
              name="google"
              color={colors.iconPrimary}
              size={iconSizes.md}
            />
            <Text style={styles.normalText}>Google</Text>
          </TouchableOpacity>
        </View>
        <DividerWithText text="or" />

        <View style={[styles.form, isTablet && {marginTop: 0}]}>
          <CustomInput
            // label="Email"
            placeholder="Enter your name"
            value={formik.values.name}
            error={formik.errors.name}
            touched={formik.touched.name}
            onChangeText={formik.handleChange('name')}
            onBlur={() => formik.setFieldTouched('name')}
          />
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
          <TouchableOpacity>
            <Text
              style={[
                styles.paragraph,
                {textAlign: 'left', fontSize: fontSizes.sm, paddingTop: 0},
                isTablet && {fontSize: spacing.lg},
              ]}
            >
              I agree to the Terms of Service and Privacy Policy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={formik.handleSubmit}
            style={[styles.button, isTablet && {marginTop: 5}]}
          >
            <Text style={styles.textColor2}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigator.navigate((IAppScreen.LOGIN as unknown) as never)
            }
          >
            <Text
              style={[
                styles.paragraph,
                {textAlign: 'left', fontSize: fontSizes.md},
                isTablet && {fontSize: spacing.lg},
              ]}
            >
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    color: colors.textPrimary,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  goBack: {
    textAlign: 'left',
  },
  textColor: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: spacing.xl,
    fontWeight: 'bold',
    fontFamily: fontFamilies.heavy,
  },
  textColor2: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: spacing.md,
    fontWeight: 'bold',
    fontFamily: fontFamilies.heavy,
  },
  imageStyle: {},
  IconContainer: {
    backgroundColor: colors.lightBackground,
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.xl,
    marginHorizontal: 'auto',
  },
  IconStyle: {
    paddingVertical: spacing.xl,
    textAlign: 'center',
  },
  paragraph: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: spacing.md,
    paddingVertical: spacing.md,
    fontFamily: fontFamilies.light,
  },
  socialAuth: {
    paddingVertical: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  normalText: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: spacing.md,
    paddingHorizontal: spacing.sm,
  },
  groupedIconText: {
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: spacing.sm,
    padding: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    paddingTop: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.lightBackground,
    backgroundColor: colors.lightBackground,
    padding: spacing.sm,

    borderRadius: 7,
    textAlign: 'center',
  },
});
