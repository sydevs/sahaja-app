import React from 'react';
import {View , Text, StyleSheet} from 'react-native'

const Meditation  = props => {
    return (
         <View style={styles.screen}>
        <Text> The Meditation Screen </Text>
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