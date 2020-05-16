import React from 'react';
import {View , Text, StyleSheet, TouchableOpacity,Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { MEDITATIONS } from '../../../data/meditationData'
import { SvgXml } from "react-native-svg";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const { width, height } = Dimensions.get('window')
const Meditation  = props => {

    const renderGridItems = (itemData) => {
        return (
                    <View style={styles.gridItems}>
                        <TouchableOpacity onPress={() => {
                    props.navigation.navigate({
                            routeName:  'ChooseDuration',
                            params: {
                                id: itemData.item.id,
                                title: itemData.item.title,
                                meditationCategories: itemData.item.meditationCategories
                            }
                        })
                    }}>
                        <View style={styles.meditationTypeImage}><SvgXml xml={itemData.item.imageData} width={wp("12.4%")} height={hp("3.82%")}/></View>
                        <Text style={styles.meditationTypeText} numberOfLines={2}>{itemData.item.title}</Text>
                        </TouchableOpacity>
                   </View>
                
            );
    };
    return (
         <View style={styles.screen}>
             <View style={{ height: hp("10.32%")}} />
             <View style={{height: hp("4.58%"),alignItems:'center'}} >
                <Text style={styles.titleText}>
                    How do you 
                </Text>
            </View>
            <View style={{height: hp("4.58%"),alignItems:'center'}} >
                <Text style={styles.titleText}>
                    wish to feel ?
                </Text>
            </View>
            <View style={{ height: hp("3.44%")}} />
             <FlatList 
             keyExtractor={(item,index) => item.id} 
             data={ MEDITATIONS } 
             //RenderItem at time of click
             renderItem= {renderGridItems} 
             numColumns={2}/>
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
        padding: wp('4.86%'),
        marginVertical: hp('0.9%'),
        width: wp('50%'),
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
        padding: wp('3.64%'),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#E0E0E0'
    },
    titleText: {
        width: wp('83.945'),
        height: hp('4.58%'),
        fontFamily: 'raleway-regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: wp('6%'),
        lineHeight: hp("4.58%"),
        textAlign: "center",
        letterSpacing: 0.8,
        color: '#7B7B7B'
    },
    meditationTypeText: {
        height: hp('3%'),
        fontFamily: 'raleway-regular',
        fontStyle: "normal",
        fontWeight: 'normal',
        fontSize: wp('4.13%'),
        lineHeight: hp("2.8%"),
        color: "#555555",
        justifyContent: "center",
        textAlign: "center"
      },
      meditationTypeImage: {
        alignItems: "center",
        marginBottom: hp('1.14%')
      }
});

export default Meditation; 