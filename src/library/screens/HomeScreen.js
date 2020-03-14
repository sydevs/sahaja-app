import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, Button,ImageBackground } from 'react-native';
import { Video } from 'expo-av';
import R from '../../res/R';

const HomeScreen = props => {
  return (
    <ImageBackground resizeMode='cover' style={styles.backgroundImage} source={R.images.Background}>
          <View style = {styles.screen} >
            
            <Button title="Meditation" onPress={() => {
              props.navigation.navigate({routeName: 'Meditation'});
            }}/>

            <Button title="Music" onPress={() => {
              props.navigation.navigate({routeName: 'Music'});
            }}/>

            <Button title="SelfRealization" onPress={() => {
              props.navigation.navigate({routeName: 'SelfRealization'});
            }}/>
            
            
          </View>
        </ImageBackground>
       );
};
  
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1
  }
});

export default HomeScreen;
