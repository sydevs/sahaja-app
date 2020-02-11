import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';



export default class HomeScreen extends React.Component {
render() {
  return (
               //text can be changed

        <SafeView style = {styles.container} >
          <Image source = {require('./assets/Background.png')}
           />
           <Text> Welcome to the Sahaja Yoga App </Text>
           <Button
          text="Music"
          outline
          onPress={() => this.props.navigation.navigate("Music") }
        />
         <Button
          text="Meditation"
          outline
          onPress={() => this.props.navigation.navigate("Meditation") }
        />
        </SafeView>
        
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
