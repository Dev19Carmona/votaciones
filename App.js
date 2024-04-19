import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { Image, StyleSheet } from "react-native";
import pexelLogo from "./assets/pexels.png";
import { useState } from "react";
import { Icon } from "react-native-elements";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import LoginScreen from "./screens/LoginScreen";
import { StorageAdapter } from "./config/storage";
import TestScreen from "./screens/TestScreen";
import NavigatorScreen from "./screens/NavigatorScreen";
import NavigatorManagmentAccountScreen from "./screens/NavigatorManagmentAccountScreen";

const Stack = createNativeStackNavigator();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
const options = {
  headerLeft: () => <Image source={pexelLogo} style={style.logo} />,
  headerRight: () => (
    <Icon
      name="menu"
      style={{ color: "#fff", fontWeight: 200 }}
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
};

export default function App() {
  const getSession = async () => {
    try {
      const token = await StorageAdapter.getData("token");
      const user = await StorageAdapter.getData("user");
      console.log({ token, user });
      if (!token && !user) {
        return undefined;
      }
      return { token, user };
    } catch (err) {
      console.error("Error al obtener el token:", err);
    }
  };
  const [session, setSession] = useState(getSession() ?? null);
  const initialRoute =
    session?.user && session?.token
      ? "NavigatorScreen"
      : "NavigatorManagmentAccountScreen";
  console.log({ session, type: typeof session });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          options={options}
          name="NavigatorManagmentAccountScreen"
          component={NavigatorManagmentAccountScreen}
        />
        <Stack.Screen
          options={options}
          name="NavigatorScreen"
          component={NavigatorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

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
    //   <NavigationContainer>
    //   <Stack.Navigator initialRouteName={initialRoute}>
    //     {typeof token === 'object' ? (
    //         <Stack.Screen options={options} name="NavigatorManagmentAccountScreen" component={NavigatorManagmentAccountScreen} />
    //     ) : (

    //       <Stack.Group>
    //         <Stack.Screen name="NavigatorScreen" component={NavigatorScreen} />
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
    // </ApolloProvider>
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
