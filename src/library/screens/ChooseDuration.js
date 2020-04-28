import React from 'react';
import {View , Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import colors from '../../res/colors'



const ChooseDuration  = props => {
    const meditationCategories = props.navigation.getParam('meditationCategories');
    const renderGridItems = (itemData) => {
        return (<TouchableOpacity onPress={() => {
                    props.navigation.navigate({
                            routeName:  'VideoPlayer',
                            params: {
                                id: itemData.item.id,
                                videoUrl: itemData.item.videoUrl
                            }
                        })
                    }}>
                    <View style={styles.gridItems}>
                        <View style={styles.container}>
                            <Text style={styles.title}>{itemData.item.id}</Text>
                        </View>
                   </View>
                </TouchableOpacity>
            );
    };
    return (
         <View style={styles.screen}>
             <Text style={styles.title}>I have</Text>
             <FlatList keyExtractor={(item,index) => item.id} data={ meditationCategories } renderItem= {renderGridItems} numColumns={3}/>            
        </View>
    );
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
        height: 80,
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
        fontFamily: 'open-sans-regular',
        fontSize: 22
    }
});

export default ChooseDuration; 