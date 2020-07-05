import React, { useState } from 'react';
import {View , Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Back from '../../res/svgs/Back'
import ArrowSvg from '../../res/svgs/Arrow'

const { width, height } = Dimensions.get('window')

const ChooseDuration  = props => {
    const meditationCategories = props.navigation.getParam('meditationCategories');
    const [meditation, setMeditation] = useState();
    const [hidden, setHidden] = useState(true);
    const [colour1, setColour1] = useState('white');
    const [colour2, setColour2] = useState('white');
    const [colour3, setColour3] = useState('white');
    return (
         <View style={styles.screen}>
             <View style={{ height: hp("5.85%")}} />
             <View style={{ height: hp("5.55%"),alignSelf:'flex-start',left: wp('6.4%')}} >
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate({
                        routeName:  'Meditation'
                    })
                }}>
                    <View style={styles.circleButton1}>
                                <Back></Back>
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
            <View style={{ height: hp("10.89%")}} />
            <View style={{flexDirection: 'row', height: hp("17.64%")}} >
                <TouchableOpacity  onPress={() => {
                    setColour1('#C5E0DC')
                    setColour2('white')
                    setColour3('white')
                    setHidden(false)
                    const meditation = { id: meditationCategories[0].id, url: meditationCategories[0].videoUrl }
                    setMeditation(meditation)
                    
                    
                    }}>
                    <View style={styles.gridItems}>
                        <View style={[styles.circleButton, !hidden && { backgroundColor: colour1 }]}>
                       
                            <Text style={styles.durationText}>{meditationCategories[0].id}</Text>
                            
                        </View>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => {
                    setColour2('#C5E0DC')
                    setHidden(false)
                    setColour1('white')
                    setColour3('white')
                    const meditation = { id: meditationCategories[1].id, url: meditationCategories[1].videoUrl }
                    setMeditation(meditation)
                    //console.log('meditationId:'+meditation.id)
                    
                    }}>
                    <View style={styles.gridItems}>
                        <View style={[styles.circleButton, !hidden && { backgroundColor: colour2 }]}>
                       
                            <Text style={styles.durationText}>{meditationCategories[1].id}</Text>
                            
                        </View>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => {
                    setColour3('#C5E0DC')
                    setHidden(false)
                    setColour1('white')
                    setColour2('white')
                    const meditation = { id: meditationCategories[2].id, url: meditationCategories[2].videoUrl }
                    setMeditation(meditation)
                    //console.log('meditationId:'+meditation.id)
                    
                    }}>
                    <View style={styles.gridItems}>
                        <View style={[styles.circleButton, !hidden && { backgroundColor: colour3 }]}>
                       
                            <Text style={styles.durationText}>{meditationCategories[2].id}</Text>
                            
                        </View>
                   </View>
                </TouchableOpacity>
            </View>
            <View style={{ height: hp("10.89%")}} />
             <View style={{flex:1, height: hp("9.75%"), alignItems:'center'}} >
             { !hidden &&<TouchableOpacity style={{alignItems:'center'}}
                onPress={() => {
                    console.log('meditationId:'+meditation.id)
                    console.log('videoUrl:'+meditation.url)
                    props.navigation.navigate({ 
                        routeName:  'VideoPlayer',
                        params: {
                                    id: meditation.id,
                                    videoUrl: meditation.url
                                }
                        }) 
                }}>  
                    <View style={styles.welcomeButton}>
                        <Text style={styles.welcomeButtonText}>
                            Start Meditation
                        </Text>
                        <ArrowSvg />
                    </View>   
                </TouchableOpacity> }
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
        alignItems: "baseline",
        justifyContent: 'center',
        height: hp('5.55%'),
        width: hp('5.55%'),  //The Width must be the same as the height
        borderRadius: hp('27.28%'), //Then Make the Border Radius twice the size of width or Height 
        backgroundColor: '#DCDCDC'
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
      },
      welcomeButtonText: {
        width: wp("41.66%"), 
        height: hp("2.17%"),
        fontFamily: "raleway-bold",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: wp("3.86%"),
        lineHeight: hp("2.17%"),
        textAlign: "right",
        letterSpacing: 0.2,
        color: "#7B7B7B",
        borderColor: "#7B7B7B",
        right: wp('3%'),
        marginRight: 0,
        paddingRight: 0
    },
    welcomeButton: {
        borderWidth: 1,
        width: wp("57.42%"),
        height: hp("9.75%"),
        borderColor: '#979797',
        //justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
        
    }
});

export default ChooseDuration; 