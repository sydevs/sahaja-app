import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import HomeScreen from "./Screens/HomeScreen";
import HomeScreen from "./Screens/Meditation";
import HomeScreen from "./Screens/Music";

const AppNavigator = createStackNavigator({
HomeScreen: {
screen: HomeScreen
},
Music: {
  screen: Music
  },
 Meditation: {
  screen: Meditation
   },

})
export default createAppContainer(AppNavigator)