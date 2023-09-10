import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screen/WelcomeScreen'
import HomeScreen from '../screen/HomeScreen'
import DetailScreen from '../screen/DetailScreen'

const Stack = createNativeStackNavigator()
const AppRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none'
        }}
      >
        <Stack.Screen name='welcome' component={WelcomeScreen} />
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoute
