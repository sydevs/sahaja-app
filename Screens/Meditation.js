import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';



export default class Meditation extends React.Component {
render() {
    return (
        <SafeView style = {styles.container} >
    <Text> Meditations </Text>
           <Button
          text=" Go Back To The Home Screen"
          outline
          onPress={() => this.props.navigation.navigate("HomeScreen") }
        />
         
        </SafeView>
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
