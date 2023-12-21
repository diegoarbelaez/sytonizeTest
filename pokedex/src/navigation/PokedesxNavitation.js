import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokemon from "../screens/Pokemon";
import Pokedex from "../screens/Pokedex";

export default function PokedesxNavitation() {
  Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}
