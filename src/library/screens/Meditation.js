import React from 'react';
import {View , Text, StyleSheet, TouchableOpacity,Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { MEDITATIONS } from '../../../data/meditationData'
import { SvgXml } from "react-native-svg";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  {Analytics} from 'aws-amplify';
import BackArrow from '../../res/svgs/BackArrow'

const { width, height } = Dimensions.get('window')
const Meditation  = props => {

    const renderGridItems = (itemData) => {
        return (
                    <View style={styles.gridItems}>
                        <TouchableOpacity onPress={() => {
                            Analytics.record({ 
                                name: "Meditation Screen" ,
                                attributes: { 
                                    meditationId: itemData.item.id 
                                }
                            })
                            props.navigation.navigate({
                                    routeName:  'ChooseDuration',
                                    params: {
                                        id: itemData.item.id,
                                        title: itemData.item.title,
                                        meditationCategories: itemData.item.meditationCategories
                                    }
                                })
                    }}>
                        <View style={styles.meditationTypeImage}><SvgXml xml={itemData.item.imageData} width={wp("13.87%")} height={hp("7.8%")}/></View>
                        <Text style={styles.meditationTypeText} numberOfLines={2}>{itemData.item.title}</Text>
                        </TouchableOpacity>
                   </View>
                
            );
    };
    return (
         <View style={styles.screen}>
             <View style={{ height: hp("5.85%")}} />
             <View style={{ height: hp("5.55%"),alignSelf:'flex-start',left: wp('2%')}} >
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate({
                        routeName:  'Home'
                    })
                }}>
                    <View style={styles.circleButton}>
                                <BackArrow></BackArrow>
                    </View>
                </TouchableOpacity>
             </View>
             <View style={{ height: hp("2.1%")}} />
             <View style={{height: hp("6%"),alignItems:'center'}} >
                <Text style={styles.titleText}>
                    How do you 
                </Text>
            </View>
            <View style={{height: hp("6%"),alignItems:'center'}} >
                <Text style={styles.titleText}>
                    wish to feel ?
                </Text>
            </View>
            <View style={{ height: hp("3.57%")}} />
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
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    circleButton:{
        flex:1,
        height: hp('5.55%'),
        width: hp('5.55%'),  //The Width must be the same as the height
        borderRadius: hp('27.28%'), //Then Make the Border Radius twice the size of width or Height 
        backgroundColor: '#D3D3D3'
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
        height: hp('4.87%'),
        fontFamily: 'raleway-regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: wp('7.29%'),
        lineHeight: hp("4.58%"),
        textAlign: "center",
        letterSpacing: 0.8,
        color: '#7B7B7B'
    },
    meditationTypeText: {
        height: hp('2.55%'),
        fontFamily: 'raleway-regular',
        fontStyle: "normal",
        fontWeight: 'normal',
        fontSize: hp('2.55%'),
        lineHeight: hp("2.65%"),
        color: "#555555",
        justifyContent: "center",
        textAlign: "center",
        top: hp('1.93%')
      },
      meditationTypeImage: {
        alignItems: "center",
        marginBottom: hp('1.14%')
      }
});

export default Meditation; 