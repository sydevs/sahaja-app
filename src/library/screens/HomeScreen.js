import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, Button,TouchableOpacity,Dimensions } from 'react-native';
import HomeBackground from '../../res/svgs/HomeBackground'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window')
const HomeScreen = props => {
  return (
          <View style = {styles.screen} >
            <View style={styles.background}>
              <HomeBackground ></HomeBackground>
            </View>
            <View style={styles.front}>
              <View style={{ height: hp('16%')}} />
              <View style={{height: hp('4.5%'),alignItems:'center'}} >
                  <Text style={styles.welcomeBack}>
                      Welcome back
                  </Text>
              </View>
              <View style={{height: hp('2%')}} />
              <View style={{height: hp('3%'), alignItems:'center'}} >
                  <Text style={styles.welcomeMessage}>
                      Let's get you meditating
                  </Text>
              </View>
              <View style={{height: hp('40%') }} />
              <View style={{height: hp('7.45%'), alignItems:'center'}} >
                  <TouchableOpacity style={{alignItems:'center'}}
                  onPress={() => {
                      console.log('going to choose meditation')
                      props.navigation.navigate({ routeName:  'Meditation'}) 
                  }}>  
                      <View style={styles.meditationButton}>
                          <Text style={styles.meditationButtonText}>
                              Choose Your Meditation
                          </Text>
                          
                      </View>   
                  </TouchableOpacity>
              </View>
              <View style={{height: hp('2%')}} />
              <View style={{height: hp('7.5%'), alignItems:'center'}} >
                  <TouchableOpacity style={{alignItems:'center'}}
                  onPress={() => {
                      console.log('going to FirstExperience')
                      props.navigation.navigate({ routeName:  'FirstExperience', tabBarVisible: false}) 
                  }}>  
                      <View style={styles.repeatMeditationButton}>
                          <Text style={styles.repeatMeditationText}>
                              REPEAT INTRO MEDITATION
                          </Text>
                      </View>   
                  </TouchableOpacity>
              </View>
            </View>
            
          </View>
        
       );
};
  
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column'
  },
  welcomeBack: {
    width: wp('83.9%'),
    height: hp('4.5%'),
    fontFamily: 'raleway-regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    // fontSize: 30,
    fontSize: wp('7.2%'),
    lineHeight: hp('4.5%'),
    textAlign: "center",
    letterSpacing: 0.8,
    color: '#7B7B7B'
  },
  welcomeMessage: {
    position: "absolute",
    width: wp('59%'),
    height: hp('3%'),
    fontFamily: "raleway-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: wp('4.6%'),
    lineHeight: hp('2.8%'),
    textAlign: "center",
    letterSpacing: 0.625,
    color: "#7B7B7B"
  },
  background: {
    flex: 1,
    zIndex: 0
  },
  front:{
    position: 'absolute',
    zIndex: 2,
    flex: 1,
    alignItems: 'center',
    right: 0,
    left: 0,
    bottom: 0,
    top:0
  },
  meditationButtonText: {
    width: wp('48.6%'), 
    height: hp('3%'),
    fontFamily: "raleway-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: wp('3.89%'),
    lineHeight: hp('2.8%'),
    textAlign: "center",
    letterSpacing: 0.2,
    color: "#7B7B7B",
    borderColor: "#7B7B7B",
},
meditationButton: {
    borderWidth: 1,
    width: wp('60.34%'),
    height: hp('7.45%'),
    borderColor: '#979797',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
    
},
repeatMeditationText: {
  height:hp('3%'),
  fontFamily: 'raleway-regular',
  fontStyle:'normal',
  fontWeight:'normal',
  fontSize:wp('3.4%'),
  lineHeight:hp('2.8%'),
  letterSpacing:0.96,
  color:"#707070",
  textAlign: 'center'
  
},
repeatMeditationButton: {
  borderBottomWidth: 1,
  borderBottomColor: '#E1DEDE',
  alignItems: 'center'
}
});

export default HomeScreen;
