import React from 'react';
import {View , StyleSheet, Dimensions} from 'react-native'
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window')
const SelfRealization  = props => {
    return (
         <View style={styles.screen}>
            <Video
                source={{ uri: 'https://player.vimeo.com/external/363242273.sd.mp4?s=945156121c0de1cdd461c63fd9bfdbcf0ce68ec5&amp;profile_id=165&amp;oauth2_token_id=1254753263' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
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
        height: height 
    }
});

export default SelfRealization; 