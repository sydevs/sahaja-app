import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Dimensions} from 'react-native';
import R from '../../res/R'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const { width, height } = Dimensions.get('window')
const FirstExperience = props => {
    return (
        <View style={styles.screen}>
            <View style={{ height: hp("12.89%")}} />
            <View style={{height: hp("6%"),alignItems:'center'}} >
                <Text style={styles.welcome}>
                    Welcome
                </Text>
            </View>
            <View style={{height: hp("3.45%")}} />
            <View style={{height: hp("3.75%"), alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    Let's get you meditating
                </Text>
            </View>
            <View style={{height: hp("7.95%")}} />
            <View style={{height: hp("34.18%"), alignItems:'center'}} >
                <Image style={styles.welcomeImage} source={R.images.welcomeImage} resizeMode='cover'/>
            </View>
            <View style={{height: hp("9.9%")}} />
            <View style={{height: hp("9.75%"), alignItems:'center'}} >
                <TouchableOpacity style={{alignItems:'center'}} 
                    onPress={() => {
                        console.log('going to your first meditation')
                        props.navigation.navigate({ routeName:  'YourFirstMeditation'}) 
                    }}> 
                        <View style={styles.welcomeButton}>
                            <Text style={styles.welcomeButtonText}>
                                Start Meditating
                            </Text>
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
        backgroundColor: 'white'
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    testView: {
        borderWidth: 2,
        borderColor: '#979797'
    },
    welcome: {
        width: wp("83.94%"),
        height: hp("4.58%"),
        fontFamily: 'raleway-regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: wp("7.29%"),
        lineHeight: 40,
        textAlign: "center",
        letterSpacing: 0.8,
        color: '#7B7B7B'
    },
    welcomeMessage: {
        position: "absolute",
        width: wp("59.12%"),
        height: 25,
        fontFamily: "raleway-regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: wp("4.86%"),
        lineHeight: 25,
        textAlign: "center",
        letterSpacing: 0.625,
        color: "#7B7B7B"
    },
    welcomeImage: {
        position: "absolute",
        width: wp("92.27%"),
        height: hp("34.18%"),
        //"left":"15px",
        //top: 227
    },
    welcomeButtonText: {
        width: wp("57.42%"), 
        height: hp("3%"),
        fontFamily: "raleway-bold",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: wp("3.89%"),
        lineHeight: hp('3%'),
        textAlign: "center",
        letterSpacing: 0.2,
        color: "#7B7B7B",
        borderColor: "#7B7B7B",
    },
    welcomeButton: {
        borderWidth: 1,
        width: wp("57.42%"),
        height: hp("9.75%"),
        borderColor: '#979797',
        justifyContent: 'center'
        
    },
    welcomeView: {
        top: hp("11.46%"),
        alignSelf: 'center',
        borderWidth: wp("0.49%"),
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
  
export default FirstExperience;