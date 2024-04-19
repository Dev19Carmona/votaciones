import React from 'react';
import TestScreen2 from '../TestScreen2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import SettingsScreen from '../SettingsScreen';
import { Icons } from '../../config/adapters/icons.adapter';

const NavigatorScreen = () => {
  const Tab = createBottomTabNavigator();
  
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icons.IconAntDesign name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icons.IconAntDesign name="setting" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default NavigatorScreen;