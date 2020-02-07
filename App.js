import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
render() {
  return (
        <View style = {styles.container} >
          <Image source = {require('./assets/Background.png')}
           />
        </View>
       );
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
