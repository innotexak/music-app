/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerNavigation from './src/component/navigation/drawNavigation';

import TrackPlayer from 'react-native-track-player';

// The player is ready to be used
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

  const setupPlayer = async ()=>{
    await TrackPlayer.setupPlayer()
  console.log("tract player setup completed")
  }
  
  useEffect(()=>{
    setupPlayer()
  },[])

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
      <DrawerNavigation/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

