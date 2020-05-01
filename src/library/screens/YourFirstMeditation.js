import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Dimensions} from 'react-native';
import ArrowSvg from '../../res/svgs/Arrow'

const { width, height } = Dimensions.get('window')
const YourFirstMeditation = props => {
    return (
        <View style={styles.screen}>
            <View style={{ height: height*0.16}} />
            <View style={{height: 40,alignItems:'center'}} >
                <Text style={styles.welcome}>
                    Your first meditation
                </Text>
            </View>
            <View style={{height: height*0.1}} />
            <View style={{height: 30, alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    1. Find a quite place, 
                </Text>
            </View>
            <View style={{height: 25, alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                     sit back and relax
                </Text>
            </View>
            <View style={{height: height*0.1}} />
            <View style={{height: 25, alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    2. It will only take 9 
                </Text>
            </View>
            <View style={{height: 25, alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    minutes and will literally change your life
                </Text>
            </View>
            <View style={{height: 25, alignItems:'center'}} >
                <Text style={styles.welcomeMessage}>
                    change your life
                </Text>
            </View>
            <View style={{height: height*0.12}} />
            <View style={{height: 65, alignItems:'center'}} >
                <TouchableOpacity style={{alignItems:'center'}}
                onPress={() => {
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
        borderWidth: 2,
        borderColor: '#979797'
    },
    welcome: {
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
    welcomeMessage: {
        position: "absolute",
        width: 243,
        height: 25,
        fontFamily: "raleway-regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 20,
        lineHeight: 25,
        textAlign: "center",
        letterSpacing: 0.625,
        color: "#7B7B7B"
    },
    welcomeImage: {
        position: "absolute",
        width: 346,
        height: 228,
        //"left":"15px",
        //top: 227
    },
    welcomeButtonText: {
        width: 200, 
        height: 19,
        fontFamily: "raleway-regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 19,
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
        width: 236,
        height: 65,
        borderColor: '#979797',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    welcomeView: {
        top: 100,
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
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#E0E0E0'
    },
        
});
  
export default YourFirstMeditation;