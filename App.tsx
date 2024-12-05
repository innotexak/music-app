/* eslint-disable react-native/no-inline-styles */
import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/homeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LikeScreen from './src/screen/likeScreen';
import PlayerScreen from './src/screen/playerScreen';
const Stack = createNativeStackNavigator();

export enum IAppScreen {
  HOME_SCREEN = 'HOME_SCREEN',
  LIKE_SCREEN = 'LIKE_SCREEN',
  PLAYER_SCREEN = 'PLAYER_SCREEN',
}

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={IAppScreen.HOME_SCREEN}
        >
          <Stack.Screen name={IAppScreen.HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={IAppScreen.LIKE_SCREEN} component={LikeScreen} />
          <Stack.Screen name={IAppScreen.PLAYER_SCREEN} component={PlayerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
