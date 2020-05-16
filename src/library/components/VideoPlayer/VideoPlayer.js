import React,{useState} from 'react';
import {View , Text, StyleSheet, SafeAreaView,Dimensions} from 'react-native'
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window')
const VideoPlayer  = props => {
    const id = props.navigation.route.id;
    const videoUrl = props.route.videoUrl;
    const [isMute,setMute] = useState(false)
    const _onPlaybackStatusUpdate = (playbackStatus) => {
        if (playbackStatus.didJustFinish){
          // The player has just finished playing and will stop.
          console.log('video finished, going to meditation screen ...')
          props.navigation.navigate('Meditation') 
        }
    };

    const didBlurSubscription = props.navigation.addListener(
        'didBlur',
        payload => {
          //console.debug('didBlur', payload);
          setMute(true)
        }
      );


    return (
         <SafeAreaView style={styles.screen}>
                <Video
                ref={this._handleVideoRef}
                onPlaybackStatusUpdate={(playbackStatus) => _onPlaybackStatusUpdate(playbackStatus)}
                source={{ uri: videoUrl }}
                rate={1.0}
                volume={1.0}
                isMuted={isMute}
                resizeMode="stretch"
                shouldPlay
                useNativeControls
                style={styles.video}
                />
        </SafeAreaView>
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
        height: height
    }
});

export default VideoPlayer; 