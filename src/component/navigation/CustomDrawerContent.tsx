import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {colors} from '../../constant/colors';
import {fontSizes, iconSizes, spacing} from '../../constant/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { fontFamilies } from '../../constant/fontFamilies';
import DrawerMenu from './drawMenuItems';

const CustomDrawerContent = (props) => {

  const isDarkMode = true;
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity onPress={()=>props.navigation.toggleDrawer()}>
          <AntDesign
            name="close"
            size={iconSizes.lg}
            color={colors.textPrimary}
          /> 
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons
            name={isDarkMode ? 'sun' : 'moon'}
            size={iconSizes.lg}
            color={colors.textPrimary}
          />
        </TouchableOpacity>
      </View>
{/* Drawer item */}
    <DrawerMenu {...props}/>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:spacing.md,
  },
  drawerItemContainer:{
    marginVertical:spacing.xl,
  },
  labelStyle:{
    fontSize:fontSizes.lg,
    color:colors.iconSecondary,
    fontFamily:fontFamilies.medium,
  },
  drawerItemStyle:{
    fontSize:fontSizes.lg,
    color:colors.iconPrimary,
    fontFamily:fontFamilies.medium,
  }
});
