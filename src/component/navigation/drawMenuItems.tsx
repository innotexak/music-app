import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { IAppScreen } from '../../../App';
import { fontSizes, iconSizes, spacing } from '../../constant/dimensions';
import { colors } from '../../constant/colors';
import { fontFamilies } from '../../constant/fontFamilies';



const DrawerMenu = (props) =>{

    const drawerItems = [
        {
          label: 'Profile',
          icon: () => <FontAwesome5 name="user" size={iconSizes.lg} color={colors.iconSecondary} />,
          screen: IAppScreen.PROFILE,
        },
        {
          label: 'Liked Songs',
          icon: () => <AntDesign name="hearto" size={iconSizes.lg} color={colors.iconSecondary} />,
          screen: IAppScreen.LIKE_SCREEN,
        },
        {
          label: 'Language',
          icon: () => <Ionicons name="language" size={iconSizes.lg} color={colors.iconSecondary} />,
          screen: IAppScreen.LANGUAGE,
        },
        {
          label: 'Contact Us',
          icon: () => <AntDesign name="mail" size={iconSizes.lg} color={colors.iconSecondary} />,
          screen: IAppScreen.CONTACT_US,
        },
        {
          label: 'FAQ',
          icon: () => <FontAwesome5 name="question" size={iconSizes.lg} color={colors.iconSecondary} />,
          screen: IAppScreen.FAQ,
        },
        {
          label: 'Settings',
          icon: () => <AntDesign name="setting" size={iconSizes.lg} color={colors.iconSecondary} />,
          screen: IAppScreen.SETTING,
        },
      ];
  return (
    <View style={styles.drawerItemContainer}>
      {drawerItems.map((item, index) => (
        <DrawerItem
          key={index}
          icon={item.icon}
          label={item.label}
          onPress={() => { props.navigation.navigate('DRAWER_HOME', {screen: item.screen})}}
          labelStyle={styles.labelStyle}
          style={styles.drawerItemStyle}
        />
      ))}
    </View>
  );
}

export default DrawerMenu
const styles = StyleSheet.create({
  
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
      paddingVertical:spacing.sm,
    }
  });