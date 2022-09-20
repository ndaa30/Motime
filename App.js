import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useState } from "react";
import apolloClient from "./config/apollo-client";
import DetailMovieScreen from "./src/screens/DetailMovieScreen";

import HomeScreen from "./src/screens/HomeScreen";
import MovieScreen from "./src/screens/MovieScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [label, setLabel] = useState("Motime");

  return (
    <NavigationContainer>
      <ApolloProvider client={apolloClient}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{
              title: `${label}`,
              headerStyle: { backgroundColor: "#820000" },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="List-Movie"
            options={{
              title: `List Movie`,
              headerStyle: { backgroundColor: "#820000" },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
            component={MovieScreen}
          />
          <Stack.Screen
            name="Detail-Movie"
            options={{
              title: `Detail Movie`,
              headerStyle: { backgroundColor: "#820000" },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
            component={DetailMovieScreen}
          />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
}
