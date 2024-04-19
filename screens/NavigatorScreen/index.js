import React from 'react'
import TestScreen2 from '../TestScreen2'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../HomeScreen'
import SettingsScreen from '../SettingsScreen'
import { Icons } from '../../config/adapters/icons.adapter'
import { useAuthStore } from '../../store'
import RequestAppointmentScreen from '../RequestAppointmentScreen'

const NavigatorScreen = () => {
  const user = useAuthStore((state) => state.user)
  const Tab = createBottomTabNavigator()
  const generalProps = { user }
  const homeScreenProps = { ...generalProps }
  const settingsScreenProps = { ...generalProps }
  const requestAppointmentScreenProps = { ...generalProps }
  return (
    <>
      <Tab.Navigator
      initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Solicitar Cita"
          component={RequestAppointmentScreen}
          initialParams={requestAppointmentScreenProps}
          options={{
            tabBarLabel: 'Request',
            tabBarIcon: ({ color, size }) => (
              <Icons.IconAntDesign name="setting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={homeScreenProps}
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
          initialParams={settingsScreenProps}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icons.IconAntDesign name="setting" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default NavigatorScreen
