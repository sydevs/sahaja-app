import React,{ Component } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading} from 'expo';
import AppNavigator from './src/library/navigation/sahajaAppNavigation'

let customFonts = {
  'open-sans-bold': require('./src/fonts/OpenSans-Bold.ttf'),
  'open-sans-regular': require('./src/fonts/OpenSans-Regular.ttf'),
  'raleway-regular': require('./src/fonts/Raleway-Regular.ttf'),
  'raleway-bold': require('./src/fonts/Raleway-Bold.ttf') 
};

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    console.log('In render()')
    if (this.state.fontsLoaded) {
      return  <AppNavigator/>;
    }else{
      return <AppLoading/>
    }
  }
}
