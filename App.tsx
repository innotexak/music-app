import {StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/homeScreen';
const Stack = createNativeStackNavigator()
const App = () => {
  return (
 <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HOME_SCREEN" component={HomeScreen}/>
    </Stack.Navigator>
 </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})