import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
import { Video } from 'expo-av';
import R from '../../res/R';
import MusicPlayer from 'library/components/AudioPlayer/MusicPlayer';

const Music  = props => {
    return (
        <View style={styles.screen}>
           {/* <Text>Music Screen - Add Music Component here</Text> */}
            
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