import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Video } from 'expo-av';
import * as Font from 'expo-font'
//import Button from './Button';
import { AppLoading } from 'expo';
import AppNavigator from './src/library/navigation/sahajaAppNavigation'

export default class App extends Component {
render() {
  return <AppNavigator />;
    }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
