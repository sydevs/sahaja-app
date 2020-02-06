import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}
export default class app extends React.Component
  {
render() {
  return 
      { 
        <View style = {style.container} >
          <Image 
           source = {require('./assets/Background.png')}
           />
        </View>
 




      };
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
