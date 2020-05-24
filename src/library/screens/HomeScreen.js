import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, Button,TouchableOpacity,Dimensions } from 'react-native';
import HomeBackground from '../../res/svgs/HomeBackground'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MeditateIcon from '../../res/svgs/Meditate'
import MusicIcon from '../../res/svgs/Music'


const { width, height } = Dimensions.get('window')
const HomeScreen = props => {
  return (
          <View style = {styles.screen} >
            <View style={styles.background}>
              <HomeBackground ></HomeBackground>
            </View>
            <View style={styles.front}>
              <View style={{ height: hp('9.6%')}} />
              <View style={{height: hp('6%'),alignItems:'center'}} >
                  <Text style={styles.welcomeBack}>
                      Welcome back
                  </Text>
              </View>
              <View style={{height: hp('3.45%')}} />
              <View style={{height: hp('3.75%'), alignItems:'center'}} >
                  <Text style={styles.welcomeMessage}>
                      Let's get you meditating
                  </Text>
              </View>
              <View style={{height: hp('42.58%') }} />
              <View style={{height: hp('9.75%'), alignItems:'center'}} >
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
              <View style={{height: hp('4.2%')}} />
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
              <View style={{height: hp('2.8%')}} />
              <View style={styles.bottomTab}>
                  <View style={styles.bottomTabColumn}>
                    <TouchableOpacity style={{alignItems:'center'}}
                      onPress={() => {
                          console.log('going to choose meditation')
                          props.navigation.navigate({ routeName:  'Meditation'}) 
                      }}> 
                        <MeditateIcon></MeditateIcon>
                        <Text style={styles.labelStyle}>Meditate</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bottomTabColumn}>
                  <TouchableOpacity style={{alignItems:'center'}}
                      onPress={() => {
                          console.log('going to choose music')
                          props.navigation.navigate({ routeName:  'Music'}) 
                      }}> 
                        <MusicIcon></MusicIcon>
                        <Text style={styles.labelStyle}>Music</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
            
          </View>
        
       );
};
  
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  welcomeBack: {
    width: wp('92.0%'),
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
    height: hp('2.8%'),
    fontFamily: "raleway-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: wp('4.8%'),
    lineHeight: hp('2.8%'),
    textAlign: "center",
    letterSpacing: 0.625,
    color: "#7B7B7B"
  },
  background: {
    flex: 1,
    //zIndex: 0
  },
  front:{
    position: 'absolute',
    //zIndex: 1,
    flex: 1,
    alignItems: 'center',
    right: 0,
    left: 0,
    bottom: 0,
    top:0
  },
  meditationButtonText: {
    width: wp('48.6%'), 
    height: hp('2.1%'),
    fontFamily: "raleway-bold",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: wp('3.89%'),
    lineHeight: hp('2.17%'),
    textAlign: "center",
    letterSpacing: 0.2,
    color: "#7B7B7B",
    borderColor: "#7B7B7B",
},
meditationButton: {
    borderWidth: 1,
    width: wp('60.34%'),
    height: hp('9.75%'),
    borderColor: '#979797',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
    
},
repeatMeditationText: {
  height:hp('2.4%'),
  fontFamily: 'raleway-regular',
  fontStyle:'normal',
  fontWeight:'normal',
  fontSize:wp('3.4%'),
  lineHeight:hp('1.83%'),
  letterSpacing:0.96,
  color:"#707070",
  textAlign: 'center'
  
},
repeatMeditationButton: {
  borderBottomWidth: 1,
  borderBottomColor: '#E1DEDE',
  alignItems: 'center'
},
bottomTab: {
  height: hp('10.94%'),
  bottom: 0,
  width: width,
  borderTopColor: '#D8D8D8',
  borderColor: 'white',
  borderWidth: 1,
  justifyContent: 'flex-end',
  flex: 1,
  flexDirection: 'row'
},
bottomTabColumn: {
  alignContent: 'center',
  flexDirection: 'column',
  width: wp('50%'),
  alignItems: 'center',
  top: hp('1.2%')
},
labelStyle: {
  fontSize: 15,
  fontFamily: 'raleway-regular',
  fontStyle: "normal",
  color: '#7B7B7B'
}
});

export default HomeScreen;
