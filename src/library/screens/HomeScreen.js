import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image,
  Button,
  SafeAreaView,
  Text,
  Alert,} 
  from 'react-native';
import { Video } from 'expo-av';
import R from 'res/R';
import MeditationChoose from './MeditationChoose';

export default class HOmeScreen extends Component {
render() {
  return (
        <SafeAreaView style = {styles.container} >
          {/* <Image source = {R.images.Background}
           /> */}
           <Video
              source={{ uri: R.uris.bigBuckBunny }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{ width: 300, height: 300 }}
            />
            <Button
                title= "Go to the meditation"
                onPress={() => props.navigation.navigate({routeName: MeditationChoose})
                }
            />
               <Button
                title= "Go to the music"
                onPress={() => props.navigation.navigate({routeName: MusicChoose})
              }
            />
        </SafeAreaView>
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
