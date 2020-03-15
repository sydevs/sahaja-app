import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
import { Video } from 'expo-av';
import R from '../../res/R';
import MusicPlayer from 'library/components/AudioPlayer/MusicPlayer';

const Music  = props => {
    return (
        <View style={styles.screen}>
           {/* <Text>Music Screen - Add Music Component here</Text> */}
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
            <MusicPlayer />
       </View>
   );
};


const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Music; 