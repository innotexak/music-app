/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerNavigation from './src/component/navigation/drawNavigation';


export enum IAppScreen {
  HOME_SCREEN = 'HOME_SCREEN',
  LIKE_SCREEN = 'LIKE_SCREEN',
  PLAYER_SCREEN = 'PLAYER_SCREEN',
  PROFILE='PROFILE',
  LANGUAGE='LANGUAGE',
  FAQ='FAQ',
  SETTING='SETTING',
  CONTACT_US='CONTACT_US'

}

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
      <DrawerNavigation/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

