import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { Image, StyleSheet, Text } from "react-native";
import pexelLogo from "./assets/pexels.png";
import { useState } from "react";
import { Icon } from "react-native-elements";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Calculator from "./screens/Calculator";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";


const Stack = createNativeStackNavigator();
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            options={{
              headerLeft: () => <Image source={pexelLogo} style={style.logo} />,
              headerRight: () => (
                <Icon
                  name="menu"
                  style={{ color: "#fff", fontWeight: 500 }}
                  onPress={() => setOpenSearch(!openSearch)}
                />
              ),
              title: "Camilo Carmona",
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerStyle: {
                backgroundColor: "#0d0d0d",
              },
            }}
          >
            {(props) => <Screen1 {...props} openSearch={openSearch} />}
          </Stack.Screen>
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
        <StatusBar />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5,
  },
});
