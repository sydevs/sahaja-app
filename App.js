import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Video } from 'expo-av';

export default class App extends Component {
render() {
  return (
        <View style = {styles.container} >
          <Image source = {require('./assets/Background.png')}
           />
           <Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}
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
