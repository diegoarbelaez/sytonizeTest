import React from "react";
import Favorite from "../screens/About";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokemon from "../screens/Pokemon";

export default function FavoriteNavigation() {
  Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}
