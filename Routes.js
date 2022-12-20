import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

import WelcomeScreen from './src/screens/WelcomeScreen';
import CharCreateScreen from './src/screens/CharCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import StoreScreen from './src/screens/StoreScreen';
import QuestsScreen from './src/screens/QuestsScreen';
import StartBattle from './src/screens/StartBattle';

import AuthProvider from './src/contexts/AuthContext';

const RoutesStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RoutesStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
          <AuthStack.Screen name="Create" component={CharCreateScreen} />
          <AuthStack.Screen name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
        <AppStack.Navigator screenOptions={{headerShown: false}}>
          <AppStack.Screen name="Home" component={HomeScreen} />
          <AppStack.Screen name="Store" component={StoreScreen} />
          <AppStack.Screen name="Quests" component={QuestsScreen} />
          <AppStack.Screen name="Start" component={StartBattle} />
        </AppStack.Navigator>
      </RoutesStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11081A',
  },
});
