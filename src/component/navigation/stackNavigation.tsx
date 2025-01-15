import React, { useState } from 'react';
import {IAppScreen} from '../../../App';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screen/homeScreen';
import LikeScreen from '../../screen/likeScreen';
import PlayerScreen from '../../screen/playerScreen';
import Profile from '../../screen/profile';
import Settings from '../../screen/settings';
import FAQs from '../../screen/faq';
import Contact from '../../screen/contact';
import LoginComponent from '../../screen/login';
import SignupComponent from '../../screen/signup';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {


    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={IAppScreen.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={IAppScreen.LIKE_SCREEN} component={LikeScreen} />
      <Stack.Screen name={IAppScreen.PLAYER_SCREEN} component={PlayerScreen} />
      <Stack.Screen name={IAppScreen.PROFILE} component={Profile} />
      <Stack.Screen name={IAppScreen.SETTING} component={Settings} />
      <Stack.Screen name={IAppScreen.FAQ} component={FAQs} />
      <Stack.Screen name={IAppScreen.CONTACT_US} component={Contact} />
      <Stack.Screen name={IAppScreen.LOGIN} component={LoginComponent} />
      <Stack.Screen name={IAppScreen.SIGNUP} component={SignupComponent} />
    </Stack.Navigator>
  );
}


export default StackNavigation;
