import React from 'react'
import TestScreen2 from '../TestScreen2'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../HomeScreen'
import SettingsScreen from '../SettingsScreen'
import { Icons } from '../../config/adapters/icons.adapter'
import { useAuthStore } from '../../store'
import RequestAppointmentScreen from '../RequestAppointmentScreen'
import PetScreen from '../PetScreen'
import { TouchableOpacity } from 'react-native'
import { useNavButtons } from '../../hooks/useNavButtons'
import TabBarButton from '../../components/TabBarButton'
import { useNavigation } from '@react-navigation/native'

const NavigatorScreen = () => {
  const navigation = useNavigation();
  const user = useAuthStore((state) => state.user)
  const token = useAuthStore((state) => state.token)
  const Tab = createBottomTabNavigator()
  const generalProps = { user,token }
  const homeScreenProps = { ...generalProps }
  const settingsScreenProps = { ...generalProps }
  const myPetsProps = { ...generalProps }
  const {handleGetMyPets} = useNavButtons()
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
      name="MyPets"
      component={PetScreen}
      initialParams={myPetsProps}
      options={{
        tabBarLabel: 'MyPets',
        tabBarIcon: ({ color, size }) => (
          <Icons.Entypo name="baidu" color={color} size={size} />
        ),
        tabBarButton: (props) => (
          <TabBarButton {...props} navigation={navigation} handleGetMyPets={handleGetMyPets}/>
        )
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
