/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne">
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-code" size={30} color={color} />,
          tabBarVisible: false
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-code" size={30} color={color} />,
          tabBarVisible: false
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{ tabBarVisible: false }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator(); 

function TabThreeNavigator({ navigation }) {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={Login}
        options={{
          headerLeft: () => <Ionicons onPress={() => navigation.goBack()} name="arrow-back-outline" style={{ paddingHorizontal: 20 }} size={30} color="white" />,
          title: "Sign In",
          headerTintColor: "#fff",
          headerStyle: { 
            backgroundColor: "#FF0044", 
           height: 110
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          letterSpacing: 1.25
        }
      }}
      />
    </TabThreeStack.Navigator>
  )
}
