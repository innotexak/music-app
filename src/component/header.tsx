import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../constant/colors';
import { iconSizes, spacing } from '../constant/dimensions';
import { useNavigation } from '@react-navigation/native';
const AppHeader = () => {
  const navigation = useNavigation()

  const toggleNavigation = ()=>{
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={toggleNavigation}>
      <FontAwesome5 name={'grip-lines'} color={colors.textPrimary} size={iconSizes.lg}/>
    </TouchableOpacity>

    <TouchableOpacity>
      <AntDesign name={'search1'} color={colors.textPrimary} size={iconSizes.lg}/>
    </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:spacing.md,
    paddingHorizontal:spacing.xl,
  },
  touchableStyle:{
    color:colors.iconPrimary,
  }
});
