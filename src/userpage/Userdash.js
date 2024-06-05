import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homeuser from "./Homeuser";
import { Ionicons } from "@expo/vector-icons";
import Order from "./Order";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();

const Userhome = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "lightgray",
        },
      }}
    >
      <Tab.Screen
        name="homeuser"
        component={Homeuser}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarLabel: "Apply Drive",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          headerShown:true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Userhome;
