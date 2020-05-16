import React from 'react';
import {View , Text, StyleSheet, TouchableOpacity,Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { MEDITATIONS } from '../../../data/meditationData'
import { SvgXml } from "react-native-svg";

const { width, height } = Dimensions.get('window')
const Meditation  = props => {

    const renderGridItems = (itemData) => {
        return (
                    <View style={styles.gridItems}>
                        <TouchableOpacity onPress={() => {
                    props.navigation.navigate('ChooseDuration',
                            {
                                id: itemData.item.id,
                                title: itemData.item.title,
                                meditationCategories: itemData.item.meditationCategories
                            })
                    }}>
                        <View style={styles.meditationTypeImage}><SvgXml xml={itemData.item.imageData} width="51" height="33"/></View>
                        <Text style={styles.meditationTypeText} numberOfLines={2}>{itemData.item.title}</Text>
                        </TouchableOpacity>
                   </View>
                
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
            <View style={{ height: 30}} />
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
        padding: 20,
        marginVertical: 8,
        width: width*0.5,
        justifyContent: 'center',
        flexDirection: "column"
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
        color: "#555555",
        justifyContent: "center",
        textAlign: "center"
      },
      meditationTypeImage: {
        alignItems: "center",
        marginBottom: 10
      }
});

export default Meditation; 