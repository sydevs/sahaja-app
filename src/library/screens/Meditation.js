import React from 'react';
import {View , Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { MEDITATIONS } from '../../../data/meditationData'
import { SvgXml } from "react-native-svg";
import CalmImage from '../../res/svgs/CalmImage'

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
                        <Text style={styles.meditationTypeText} numberOfLines={2}>{itemData.item.title}</Text>
                        <SvgXml xml={itemData.item.imageData} width="51" height="33"/>
                   </View>
                </TouchableOpacity>
            );
    };
    return (
         <View style={styles.screen}>
             <View style={{ height: 90}} />
             <View style={{height: 40,alignItems:'center'}} >
                <Text style={styles.titleText}>
                    How do you 
                </Text>
            </View>
            <View style={{height: 40,alignItems:'center'}} >
                <Text style={styles.titleText}>
                    wish to feel ?
                </Text>
            </View>
            <View style={{ height: 50}} />
             <FlatList keyExtractor={(item,index) => item.id} data={ MEDITATIONS } renderItem= {renderGridItems} numColumns={2}/>
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
        alignItems: 'center',
        flexDirection: 'column'
    },
    gridItems: {
        flex: 1
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
    titleText: {
        width: 345,
        height: 40,
        fontFamily: 'raleway-regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 30,
        lineHeight: 40,
        textAlign: "center",
        letterSpacing: 0.8,
        color: '#7B7B7B'
    },
    meditationTypeText: {
        height: 20,
        fontFamily: 'raleway-regular',
        fontStyle: "normal",
        fontWeight: 'normal',
        fontSize: 17,
        lineHeight: 20,
        color: "#555555"
      }
});

export default Meditation; 