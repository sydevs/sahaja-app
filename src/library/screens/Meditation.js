import React from 'react';
import {View , Text, StyleSheet} from 'react-native'
import { Video } from 'expo-av';
import R from '../../res/R'

const Meditation  = props => {
    return (
         <View style={styles.screen}>
            <Video
                source={{ uri: 'https://player.vimeo.com/external/357079761.sd.mp4?s=c8d6c2269ec07745e3af20b085666cf7003e1e5e&amp;profile_id=165&amp;oauth2_token_id=1254753263' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: 350, height: 550 }}
                />
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

export default Meditation; 