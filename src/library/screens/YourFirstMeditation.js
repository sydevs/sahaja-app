import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Dimensions,AsyncStorage} from 'react-native';
import ArrowSvg from '../../res/svgs/Arrow'
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HAS_LAUNCHED = 'hasLaunched';
const { width, height } = Dimensions.get('window')
const YourFirstMeditation = props => {
    
    return (
        <View style={styles.screen}>
            <View style={{ height: hp("16%")}} />
            <View>
                <View style={{height: hp("9.17%"),flex: 1,zIndex: 0,width: wp("30%"),left: wp("10%")}}>
                    <LinearGradient
                            colors={['#FFFFFF','#EBF4F3']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            style={{ height: hp("9.17%") }}/>
                </View>
                <View style={{height: hp("9.17%"),alignItems:'center',zIndex: 1,position: 'absolute',right: 0,left: 0}} >
                    
                        <Text style={styles.welcome}>
                            Your first meditation
                        </Text>
                    
                </View>
            </View>
            <View style={{height: hp("20%")}} />
            <View style={{height: hp("3.5%"), alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    1. Find a quite place, 
                </Text>
            </View>
            <View style={{height: hp("2.86%"), alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                     sit back and relax
                </Text>
            </View>
            <View style={{height: hp("10%")}} />
            <View style={{height: hp("2.86%"), alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    2. It will only take 9 
                </Text>
            </View>
            <View style={{height: hp("2.86%"), alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    minutes and will literally change your life
                </Text>
            </View>
            <View style={{height: hp("2.86%"), alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    change your life
                </Text>
            </View>
            <View style={{height: hp("12%")}} />
            <View style={{height: hp("7.45%"), alignItems:'center'}} >
                <TouchableOpacity style={{alignItems:'center'}}
                onPress={() => {
                    console.log('setting has launched')
                    AsyncStorage.setItem(HAS_LAUNCHED, 'true');
                    console.log('going to self realization')
                    props.navigation.navigate({ routeName:  'SelfRealization'}) 
                }}>  
                    <View style={styles.welcomeButton}>
                        <Text style={styles.welcomeButtonText}>
                            Start Meditation
                        </Text>
                        <ArrowSvg />
                    </View>   
                </TouchableOpacity>
            </View>
        </View>
        );
}
    
const styles = StyleSheet.create({
    screen : {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    testView: {
        borderWidth: wp("0.48%"),
        borderColor: '#979797'
    },
    welcome: {
        width: wp("83.94%"),
        height: hp("9.17%"),
        fontFamily: 'raleway-regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: wp("7%"),
        lineHeight: hp("5%"),
        textAlign: "center",
        letterSpacing: 0.8,
        color: '#7B7B7B',
        top: hp("2.29%")
    },
    welcomeMessage: {
        position: "absolute",
        width: wp("59.12%"),
        height: hp("2.86%"),
        fontFamily: "raleway-regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: wp("4%"),
        lineHeight: hp("2.86%"),
        textAlign: "center",
        letterSpacing: 0.625,
        color: "#7B7B7B"
    },
    welcomeImage: {
        position: "absolute",
        width: wp("84.18%"),
        height: hp("26.14%"),
        //"left":"15px",
        //top: 227
    },
    welcomeButtonText: {
        width: wp("48.66%"), 
        height: hp("3%"),
        fontFamily: "raleway-regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: wp("3.86%"),
        lineHeight: hp("2.8%"),
        textAlign: "center",
        letterSpacing: 0.2,
        color: "#7B7B7B",
        borderColor: "#7B7B7B",
        right: 0,
        marginRight: 0,
        paddingRight: 0
    },
    welcomeButton: {
        borderWidth: 1,
        width: wp("57.42%"),
        height: hp("7.45%"),
        borderColor: '#979797',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    welcomeView: {
        top: hp("11.465"),
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#979797',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0,  height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: wp("3.64%"),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#E0E0E0'
    },
        
});
  
export default YourFirstMeditation;