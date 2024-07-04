import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../Screens/Welcome';
import Homee from '../Screens/Homee';
import APIScreens from '../Screens/APIScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Informacion from '../Screens/Informacion';
import EditaryEliminar from '../Screens/EditaryEliminar';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Homee" component={Homee} />
    <BottomTab.Screen name="Api" component={APIScreens} />
    <BottomTab.Screen name="Informacion" component={Informacion} />
    <BottomTab.Screen name="EditaryElimar" component={EditaryEliminar} />
  </BottomTab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
