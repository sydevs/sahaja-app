import React from 'react';
import {View , Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { MEDITATIONS } from '../../../data/meditationData'




const Meditation  = props => {
    const renderGridItems = (itemData) => {
        return (<TouchableOpacity onPress={() => {
                    props.navigation.navigate({
                            routeName:  'ChooseDuration',
                            params: {
                                id: itemData.item.id,
                                title: itemData.item.title,
                                meditationCategories: itemData.item.meditationCategories
                            }
                        })
                    }}>
                    <View style={styles.gridItems}>
                        <View style={styles.container}>
                            <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text>
                        </View>
                   </View>
                </TouchableOpacity>
            );
    };
    return (
         <View style={styles.screen}>
             <Text style={styles.title}>I wish to feel ...</Text>
             <FlatList keyExtractor={(item,index) => item.id} data={ MEDITATIONS } renderItem= {renderGridItems} numColumns={1}/>
        </View>
    );
};

Meditation.navigationOptions = {
    headerTitle: 'Select Goal'
};


const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItems: {
        flex: 1,
        margin: 15,
        height: 100,
        borderRadius:10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0,  height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#E0E0E0'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default Meditation; 