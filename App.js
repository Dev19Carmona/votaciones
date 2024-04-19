import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, StyleSheet } from "react-native";
import calendar from "./assets/calendario.png"
import { Icon } from "react-native-elements";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import NavigatorScreen from "./screens/NavigatorScreen";
import NavigatorManagmentAccountScreen from "./screens/NavigatorManagmentAccountScreen";
import { useAuthStore } from "./store";

const Stack = createNativeStackNavigator();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
const options = {
  headerLeft: () => <Image source={calendar} style={style.logo} />,
  headerRight: () => (
    <Icon
      name="menu"
      style={{ color: "#fff", fontWeight: 200 }}
      onPress={() => {}}
    />
  ),
  title: "Appointments App",
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerStyle: {
    backgroundColor: "#0d0d0d",
  },
};

export default function App() {
  
  const status = useAuthStore(state => state.status)
  const initialRoute =
  status === 'authenticated'
      ? "NavigatorScreen"
      : "NavigatorManagmentAccountScreen";
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
