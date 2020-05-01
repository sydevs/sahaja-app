import React from 'react';
import {View , StyleSheet, Dimensions} from 'react-native'
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window')
const SelfRealization  = props => {

    const _onPlaybackStatusUpdate = (playbackStatus) => {
        if (playbackStatus.didJustFinish){
          // The player has just finished playing and will stop.
          console.log('video finished, going to home scren ...')
          props.navigation.navigate({ routeName:  'Home'}) 
        }
    };

    return (
         <View style={styles.screen}>
             
            <Video
                ref={this._handleVideoRef}
                source={{ uri: 'https://player.vimeo.com/external/363242273.sd.mp4?s=945156121c0de1cdd461c63fd9bfdbcf0ce68ec5&amp;profile_id=165&amp;oauth2_token_id=1254753263' }}
                onPlaybackStatusUpdate={(playbackStatus) => _onPlaybackStatusUpdate(playbackStatus)}
                //rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={ true }
                useNativeControls
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