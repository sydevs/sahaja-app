import React from 'react';
import {View , Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import colors from '../../res/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import BackArrow from '../../res/svgs/BackArrow'

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
             <View style={{ height: hp("5.85%")}} />
             <View style={{ height: hp("5.55%"),alignSelf:'flex-start',left: wp('2%')}} >
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate({
                        routeName:  'Meditation'
                    })
                }}>
                    <View style={styles.circleButton1}>
                                <BackArrow></BackArrow>
                    </View>
                </TouchableOpacity>
             </View>
             <View style={{ height: hp("3.44%")}} />
             <View style={{height: hp("6.14%"),alignItems:'center'}} >
                <Text style={styles.titleText}>
                    How much time 
                </Text>
            </View>
            <View style={{height: hp("6.14%"),alignItems:'center'}} >
                <Text style={styles.titleText}>
                    do you have ?
                </Text>
            </View>
            <View style={{ height: hp("18.89%")}} />
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
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    circleButton1:{
        flex:1,
        height: hp('5.55%'),
        width: hp('5.55%'),  //The Width must be the same as the height
        borderRadius: hp('27.28%'), //Then Make the Border Radius twice the size of width or Height 
        backgroundColor: '#D3D3D3'
      },
    gridItems: {
        flex: 1,
        margin: wp('3.65%'),
        height: hp("13.64%"),
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
        padding: wp('3.64%'),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#E0E0E0'
    },
    title: {
        fontFamily: 'open-sans-regular',
        fontSize: wp("5.35%")
    },
    titleText: {
        width: wp("83.94%"),
        height: hp("4.58%"),
        fontFamily: 'raleway-regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: wp('7.29%'),
        lineHeight: hp("4.58%"),
        textAlign: "center",
        letterSpacing: 0.8,
        color: '#7B7B7B'
    },
    durationText: {
        height: hp("2.97%"),
        fontFamily: 'raleway-bold',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19,
        color: "#7B7B7B",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: hp("5.4%")
    },
    circleButton:{
        flex:1,
        height: hp('13.64%'),
        width: hp('13.64%'),  //The Width must be the same as the height
        borderRadius: hp('27.28%'), //Then Make the Border Radius twice the size of width or Height   
        borderWidth: 1,
        borderColor: '#555555'
      }
});

export default ChooseDuration; 