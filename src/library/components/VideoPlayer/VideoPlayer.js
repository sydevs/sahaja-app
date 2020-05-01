import React,{useState} from 'react';
import {View , Text, StyleSheet, Button,Dimensions} from 'react-native'
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window')
const VideoPlayer  = props => {
    const id = props.navigation.getParam('id');
    const videoUrl = props.navigation.getParam('videoUrl');
    const [isMute,setMute] = useState(false)
    const _onPlaybackStatusUpdate = (playbackStatus) => {
        if (playbackStatus.didJustFinish){
          // The player has just finished playing and will stop.
          console.log('video finished, going to home scren ...')
          props.navigation.navigate({ routeName:  'Meditation'}) 
        }
    };

    const didBlurSubscription = props.navigation.addListener(
        'didBlur',
        payload => {
          console.debug('didBlur', payload);
          setMute(true)
        }
      );


    return (
         <View style={styles.screen}>
                <Video
                ref={this._handleVideoRef}
                onPlaybackStatusUpdate={(playbackStatus) => _onPlaybackStatusUpdate(playbackStatus)}
                source={{ uri: videoUrl }}
                rate={1.0}
                volume={1.0}
                isMuted={isMute}
                resizeMode="cover"
                shouldPlay
                useNativeControls
                style={styles.video}
                />
        </View>
    );
};


const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    video: {
        width: width,
        height: height * 0.8
    }
});

export default VideoPlayer; 