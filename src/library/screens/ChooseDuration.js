import React from 'react';
import {View , Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import colors from '../../res/colors'


const { width, height } = Dimensions.get('window')
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
                        <View style={styles.circleButton}>
                            <Text style={styles.durationText}>{itemData.item.id}</Text>
                            
                        </View>
                   </View>
                </TouchableOpacity>
            );
    };
    return (
         <View style={styles.screen}>
             <View style={{ height: height * 0.15}} />
             <View style={{height: 40,alignItems:'center'}} >
                <Text style={styles.titleText}>
                    How much time 
                </Text>
            </View>
            <View style={{height: 40,alignItems:'center'}} >
                <Text style={styles.titleText}>
                    do you have ?
                </Text>
            </View>
            <View style={{ height: height * 0.25}} />
            <View style={{flex: 1}} >
                <FlatList keyExtractor={(item,index) => item.id} data={ meditationCategories } renderItem= {renderGridItems} numColumns={3}/>            
            </View>
             
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    gridItems: {
        flex: 1,
        margin: 15,
        height: 100,
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
    durationText: {
        height: 19,
        fontFamily: 'raleway-regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        color: "#7B7B7B",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 35
    },
    circleButton:{
        flex:1,
        height: 100,
        width: 100,  //The Width must be the same as the height
        borderRadius: 200, //Then Make the Border Radius twice the size of width or Height   
        borderWidth: 1,
        borderColor: '#555555'
      }
});

export default ChooseDuration; 