import React from 'react';
import {View , Text, StyleSheet, Button} from 'react-native'
import { Video } from 'expo-av';

const VideoPlayer  = props => {
    const title = props.navigation.getParam('title');
    const videoUrl = props.navigation.getParam('videoUrl');
    return (
         <View style={styles.screen}>
            <Text>Video Player Screen - {title}</Text>
            <Video
                source={{ uri: videoUrl }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: 350, height: 550 }}
                />
            <Button title="Go Back to Home" onPress={() => {
                 props.navigation.popToTop();
             }}/>
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

export default VideoPlayer; 