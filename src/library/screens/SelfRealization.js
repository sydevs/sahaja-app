import React from 'react';
import {View , Text, StyleSheet} from 'react-native'
import { Video } from 'expo-av';
import R from '../../res/R'

const SelfRealization  = props => {
    return (
         <View style={styles.screen}>
            <Video
                source={{ uri: 'https://player.vimeo.com/external/363241676.hd.mp4?s=d7549d7f7476a056a027920477542db4bd4acfa4&amp;profile_id=174&amp;oauth2_token_id=1254753263' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="stretch"
                shouldPlay
                isLooping
                style={{ width: 300, height: 300 }}
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

export default SelfRealization; 