// import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./screens/HomeScreen";
// import { Image, StyleSheet, Text } from "react-native";
// import pexelLogo from "./assets/pexels.png";
// import { useState } from "react";
// import { Icon } from "react-native-elements";
// import React from "react";
// import { ApolloProvider } from "@apollo/client";
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { getMainDefinition } from "@apollo/client/utilities";
// import { split } from "@apollo/client";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setContext } from "@apollo/client/link/context";
// import { createUploadLink } from "apollo-upload-client";
// import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
// import { createClient } from "graphql-ws";

// const Stack = createNativeStackNavigator();
// const authLink = setContext(async (_, { headers }) => {

//   const token = await AsyncStorage.getItem("session");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `${token}` : "",
//       "apollo-require-preflight": true,
//     },
//   };
// }).concat(
//   createUploadLink({
//     uri: "http://127.0.0.1:4000/graphql",
//   })
// );
// //hola
// const wsLink = new GraphQLWsLink(
//   createClient({
//     webSocketImpl: WebSocket,
//     url: "ws://127.0.0.1:4000/graphql",
//   })
// );

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   authLink
// );

// const client = new ApolloClient({
//   link: splitLink,
//   cache: new InMemoryCache(),
// });
// export default function App() {
//   const [openSearch, setOpenSearch] = useState(false);
//   return (
//     <ApolloProvider client={client}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="HomeScreen"
//             options={{
//               headerLeft: () => <Image source={pexelLogo} style={style.logo} />,
//               headerRight: () => (
//                 <Icon
//                   name="menu"
//                   style={{ color: "#fff", fontWeight: 500 }}
//                   onPress={() => setOpenSearch(!openSearch)}
//                 />
//               ),
//               title: "Inventario",
//               headerTintColor: "#fff",
//               headerTitleStyle: {
//                 fontWeight: "bold",
//               },
//               headerStyle: {
//                 backgroundColor: "#0d0d0d",
//               },
//             }}
//           >
//             {(props) => <HomeScreen {...props} openSearch={openSearch} />}
//           </Stack.Screen>
//         </Stack.Navigator>
//         <StatusBar />
//       </NavigationContainer>
//     </ApolloProvider>
//   );
// }

// const style = StyleSheet.create({
//   logo: {
//     width: 37,
//     height: 37,
//     marginEnd: 5,
//     borderRadius: 5,
//   },
// });
