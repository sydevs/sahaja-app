import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image,
  Button,
  SafeAreaView,
  Text,
  Alert,} 
  from 'react-native';
import MeditationChoose from './MeditationChoose';
import Meditation from './Meditation';

export default class MusicChoose extends Component {
render() {
  return (
        <SafeAreaView style = {styles.container} >
         
            <Button
                title= "Music 1"
                onPress={() => props.navigation.navigate({routeName: Meditation})
                }
            />
               <Button
                title= "Music 2"
                onPress={() => props.navigation.navigate({routeName: Meditation})
              }
              />
              <Button
               title= "Music 3"
               onPress={() => props.navigation.navigate({routeName: Meditation})
             }
            />
        </SafeAreaView>
       );
    }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
