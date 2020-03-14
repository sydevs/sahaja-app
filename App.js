import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Video } from 'expo-av';
import R from 'res/R';
// import AudioPlayer from 'library/components/AudioPlayer/AudioPlayer';
import MusicPlayer from 'library/components/AudioPlayer/MusicPlayer';

export default class App extends Component {
render() {
  return (
        <View style = {styles.container} >
          {/* <Image source = {R.images.Background}
           /> */}
           {/* <Video
              source={{ uri: R.uris.bigBuckBunny }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{ width: 300, height: 300 }}
        useNativeControls={true}
            /> */}
            {/* <AudioPlayer /> */}
            <MusicPlayer />
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
