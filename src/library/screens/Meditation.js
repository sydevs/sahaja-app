import React from 'react';
import {View , Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { MEDITATIONS } from '../../../data/meditationData'
import colors from '../../res/colors'



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
                        <Text>{itemData.item.title}</Text>
                   </View>
                </TouchableOpacity>
            );
    };
    return (
         <View style={styles.screen}>
             <Text>Choose Meditation</Text>
             <FlatList keyExtractor={(item,index) => item.id} data={ MEDITATIONS } renderItem= {renderGridItems} numColumns={1}/>
             {/* <Button title="Feel Satisfied" onPress={() => {
                 props.navigation.navigate({
                    routeName: 'VideoPlayer'       
                 });
             }}/> */}

            
        </View>
    );
};

Meditation.navigationOptions = {
    headerTitle: 'Meditate Now',
    headerStyle: {
        backgroundColor: colors.title
    } ,
    headerTintColor: 'white'
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
        height: 150
    }
});

export default Meditation; 