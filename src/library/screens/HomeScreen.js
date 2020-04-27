import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, Button,ImageBackground,Dimensions } from 'react-native';
import { Video } from 'expo-av';
import HomeBackground from '../../res/svgs/HomeBackground'
import checkIfFirstLaunch from '../components/CheckIfFirstLaunch'

const { width, height } = Dimensions.get('window')
const HomeScreen = props => {
  
  return (
          <View style = {styles.screen} >
            <View style={styles.background}>
              <HomeBackground ></HomeBackground>
            </View>
            <View style={styles.front}>
              <View style={{ height: 100}} />
              <View style={{height: 40,alignItems:'center',paddingLeft: width * 0.1}} >
                  <Text style={styles.welcomeBack}>
                      Welcome back
                  </Text>
              </View>
              <View style={{height: 23}} />
              <View style={{height: 25, alignContent:'center',paddingLeft: width * 0.5}} >
                  <Text style={styles.welcomeMessage}>
                      Let's get you meditating
                  </Text>
              </View>
            </View>
            

            

            
            {/* <Button title="Setup your own Meditation" onPress={() => {
              props.navigation.navigate({routeName: 'Meditation'});
            }}/>

            <Button title="Music" onPress={() => {
              props.navigation.navigate({routeName: 'Music'});
            }}/>

            <Button title="SelfRealization" onPress={() => {
              props.navigation.navigate({routeName: 'SelfRealization'});
            }}/> */}
            
            
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
    zIndex: 1,
    alignItems: 'center'
  }
});

export default HomeScreen;
