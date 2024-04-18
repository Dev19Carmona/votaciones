import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import { Image, StyleSheet } from 'react-native'
import pexelLogo from './assets/pexels.png'
import { useState } from 'react'
import { Icon } from 'react-native-elements'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import LoginScreen from './screens/LoginScreen'
import { StorageAdapter } from './config/storage'
import TestScreen from './screens/TestScreen'
import NavigatorScreen from './screens/NavigatorScreen'

const Stack = createNativeStackNavigator()
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})
const options = {
  headerLeft: () => <Image source={pexelLogo} style={style.logo} />,
  headerRight: () => (
    <Icon
      name="menu"
      style={{ color: '#fff', fontWeight: 200 }}
      onPress={() => setOpenSearch(!openSearch)}
    />
  ),
  title: 'Camilo Carmona',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: '#0d0d0d',
  },
}

export default function App() {
  const [openSearch, setOpenSearch] = useState(false)
  const getToken = async () => {
    try {
      const value = await StorageAdapter.getData('token')
      if (value) return value
      return null
    } catch (err) {
      console.error('Error al obtener el token:', err)
    }
  }
  const [token, setToken] = useState(getToken())
  const initialRoute =
    typeof token === 'object' ? 'LoginScreen' : 'NavigatorScreen'
  console.log(token)

  return (
    // <ApolloProvider client={client}>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName={initialRoute}>
    //     {typeof token === 'object' ? (
    //       <Stack.Group>
    //         <Stack.Screen name="LoginScreen" options={options}>
    //           {(props) => <LoginScreen {...props} />}
    //         </Stack.Screen>


    //         <Stack.Screen name="NavigatorScreen" options={options}>
    //           {(props) => <NavigatorScreen {...props} openSearch={openSearch} />}
    //         </Stack.Screen>
    //         <Stack.Screen name="HomeScreen" options={options}>
    //           {(props) => <HomeScreen {...props} openSearch={openSearch} />}
    //         </Stack.Screen>

    //         <Stack.Screen name="TestScreen" options={options}>
    //           {(props) => <TestScreen {...props} openSearch={openSearch} />}
    //         </Stack.Screen>
    //       </Stack.Group>
    //     ) : (
    //       <Stack.Group>
    //         <Stack.Screen name="NavigatorScreen" options={options}>
    //           {(props) => <NavigatorScreen {...props} openSearch={openSearch} />}
    //         </Stack.Screen>
    //         <Stack.Screen name="HomeScreen" options={options}>
    //           {(props) => <HomeScreen {...props} openSearch={openSearch} />}
    //         </Stack.Screen>

    //         <Stack.Screen name="TestScreen" options={options}>
    //           {(props) => <TestScreen {...props} openSearch={openSearch} />}
    //         </Stack.Screen>
    //       </Stack.Group>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
    <Stack.Navigator initialRouteName={initialRoute}>
      {typeof token === 'object' ? (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
      ) : (
        
        <Stack.Group>
          <Stack.Screen name="NavigatorScreen" component={NavigatorScreen} />
          {/* <Stack.Screen name="NavigatorScreen" options={options}>
            {(props) => <NavigatorScreen {...props} openSearch={openSearch} />}
          </Stack.Screen>
          <Stack.Screen name="HomeScreen" options={options}>
            {(props) => <HomeScreen {...props} openSearch={openSearch} />}
          </Stack.Screen>

          <Stack.Screen name="TestScreen" options={options}>
            {(props) => <TestScreen {...props} openSearch={openSearch} />}
          </Stack.Screen> */}
        </Stack.Group>
      )}
    </Stack.Navigator>
  </NavigationContainer>
    // </ApolloProvider>
  )
}

const style = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5,
  },
})
