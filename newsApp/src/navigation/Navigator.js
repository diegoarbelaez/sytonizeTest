import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewOverview from "../screens/NewOverview";
import Home from "../screens/Home";
import About from "../screens/About";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="NewOverview" component={NewOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "News",
          tabBarLabel: "News",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="calendar-o" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={About}
        options={{
          headerTitle: "About",
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="info" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
