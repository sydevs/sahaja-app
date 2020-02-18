import React from 'react';
import {View , Text, StyleSheet} from 'react-native'

const Music  = props => {
    return (
         <View style={styles.screen}>
        <Text> The Music Screen </Text>
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