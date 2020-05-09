import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, Button,TouchableOpacity,Dimensions } from 'react-native';
import HomeBackground from '../../res/svgs/HomeBackground'

const { width, height } = Dimensions.get('window')
const HomeScreen = props => {
  
  return (
          <View style = {styles.screen} >
            <View style={styles.background}>
              <HomeBackground ></HomeBackground>
            </View>
            <View style={styles.front}>
              <View style={{ height: height*0.16}} />
              <View style={{height: 40,alignItems:'center'}} >
                  <Text style={styles.welcomeBack}>
                      Welcome back
                  </Text>
              </View>
              <View style={{height: height*0.05}} />
              <View style={{height: 25, alignItems:'center'}} >
                  <Text style={styles.welcomeMessage}>
                      Let's get you meditating
                  </Text>
              </View>
              <View style={{height: height*0.4 }} />
              <View style={{height: 65, alignItems:'center'}} >
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
              <View style={{height: height*0.02}} />
              <View style={{height: 65, alignItems:'center'}} >
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
},
meditationButton: {
    borderWidth: 1,
    width: 248,
    height: 65,
    borderColor: '#979797',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
    
},
repeatMeditationText: {
  height:16,
  fontFamily: 'raleway-regular',
  fontStyle:'normal',
  fontWeight:'normal',
  fontSize:14,
  lineHeight:16,
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
