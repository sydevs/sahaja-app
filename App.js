import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font'
import R from 'res/R';
import { AppLoading } from 'expo';
import AppNavigator from './src/library/navigation/sahajaAppNavigation'

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'open-sans-bold': require('./src/fonts/OpenSans-Bold.ttf'),
      'open-sans-regular': require('./src/fonts/OpenSans-Regular.ttf')
    });
  }
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
