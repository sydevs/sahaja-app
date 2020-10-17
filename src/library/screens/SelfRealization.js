import React,{useState,useEffect} from 'react';
import {View , StyleSheet, Dimensions} from 'react-native'
import { Video } from 'expo-av';
import { Audio } from 'expo-av';
import  {Analytics} from 'aws-amplify';

const { width, height } = Dimensions.get('window')
const SelfRealization  = props => {

    const _onPlaybackStatusUpdate = (playbackStatus) => {
        if (playbackStatus.didJustFinish){
          // The player has just finished playing and will stop.
          console.log('video finished, going to home scren ...')
          props.navigation.navigate({ routeName:  'Home'}) 
        }

        if (playbackStatus.isLoaded && !playbackStatus.isPlaying) {
            
        }
    };

    const _handleVideoRef = async (component) => {
        const playbackObject = component
        if (playbackObject) {
            await playbackObject.loadAsync({
                uri: "https://player.vimeo.com/external/363242273.sd.mp4?s=945156121c0de1cdd461c63fd9bfdbcf0ce68ec5&amp;profile_id=165&amp;oauth2_token_id=1254753263",
                shouldPlay: true
            })
            // todo: Trigger fullScreen without videoStack loading
            //playbackObject.presentFullscreenPlayer();
            playbackObject.playAsync()
            //playbackObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
        }
    }
    const [isMute,setMute] = useState(false)

    const didBlurSubscription = props.navigation.addListener(
        'didBlur',
        payload => {
          //console.debug('didBlur', payload);
          setMute(true)
        }
      );

    useEffect(() => { 
        async function logEvent(){
            Analytics.record({ name: "Self Realization!" })
        }
        logEvent();
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActiveInBackground: true,
            playThroughEarpieceAndroid: true
        })
    },[]);

    return (
         <View style={styles.screen}>
             
            <Video
                ref={_handleVideoRef}
                // source={{ uri: 'https://player.vimeo.com/external/363242273.sd.mp4?s=945156121c0de1cdd461c63fd9bfdbcf0ce68ec5&amp;profile_id=165&amp;oauth2_token_id=1254753263' }}
                onPlaybackStatusUpdate={(playbackStatus) => _onPlaybackStatusUpdate(playbackStatus)}
                rate={1.0}
                volume={1.0}
                isMuted={isMute}
                resizeMode="cover"
                shouldPlay={ false }
                useNativeControls
                shouldCorrectPitch={true}
                style={styles.video}
                />
        </View>
    );
};

SelfRealization.navigationOptions = {
    tabBarVisible: false
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

export default SelfRealization; 