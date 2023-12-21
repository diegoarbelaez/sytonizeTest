import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Developer from "../screens/Developer";
import Pokedex from "../screens/Pokedex";
import About from "../screens/About";
import Pokemon from "../screens/Pokemon";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "react-native"; //Asi se importan las imagenes

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerTitle: "About",
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="info" size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#ef5350",
          },
        }}
      />
      <Tab.Screen
        name="PokedexScreen"
        component={Pokedex}
        options={{
          headerTitle: "Pokemon List",
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
          headerStyle: {
            backgroundColor: "#ef5350",
          },
        }}
      />
      <Tab.Screen
        name="Developer"
        component={Developer}
        options={{
          headerTitle: "The Developer",
          headerStyle: {
            backgroundColor: "#ef5350",
          },
          tabBarLabel: "Diego Arbelaez",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="user" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/poketball.png")}
      style={{ width: 70, height: 70, top: -18 }}
    />
  );
}
