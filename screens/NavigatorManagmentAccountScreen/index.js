import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterScreen from '../RegisterScreen';
import LoginScreen from '../LoginScreen';
import { Icons } from '../../config/adapters/icons.adapter';

const NavigatorManagmentAccountScreen = () => {
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
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <Icons.IconAntDesign name="login" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            tabBarLabel: 'Register',
            tabBarIcon: ({ color, size }) => (
              <Icons.IconAntDesign name="adduser" color={color} size={size} />
            ),
          }}
        />
        
      </Tab.Navigator>
    </>
  );
};

export default NavigatorManagmentAccountScreen;