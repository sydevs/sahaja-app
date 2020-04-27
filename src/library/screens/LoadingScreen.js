import React,{ Component, useEffect, useState } from 'react';
import {StyleSheet,View,Text,AsyncStorage} from 'react-native';
import checkIfFirstLaunched from '../components/CheckIfFirstLaunch'
const HAS_LAUNCHED = 'hasLaunched';

const LoadingScreen = props => {
    const [isFirstLaunch,setFirstLaunch] = useState('true');

    useEffect(() => { 
        
        async function checkLaunchState(){
            const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
            console.log('LoadingScreen->checkLaunchState:'+hasLaunched)
            if(hasLaunched == null){
                console.log('going to first experience ...')
                props.navigation.navigate({routeName: 'FirstExperience'});
            }else{
                props.navigation.navigate({routeName: 'Home'});
            }
        }
        checkLaunchState();
    },[]);
        


    return (
    <View style={styles.screen}>
        <Text >
        Loading Screen
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
      
});
  
export default LoadingScreen;