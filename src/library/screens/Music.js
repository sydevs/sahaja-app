import React from 'react';
import {View , Text, StyleSheet} from 'react-native'
import { Video } from 'expo-av';
import R from '../../res/R'

const Music  = props => {
    return (
        <View style={styles.screen}>
           <Text>Music Screen - Add Music Component here</Text>
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