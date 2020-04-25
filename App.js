import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font'
import R from 'res/R';
import { AppLoading} from 'expo';
import AppNavigator from './src/library/navigation/sahajaAppNavigation'
import checkIfFirstLaunch from './src/library/components/CheckIfFirstLaunch'
import SelfRealization from './src/library/screens/SelfRealization'
import LoadingScreen from './src/library/screens/LoadingScreen'
import FirstExperience from './src/library/screens/FirstExperience'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstLaunchState: false,
      //hasCheckedAsyncStorage: false,
    };
  }

  async componentWillMount() {
    const isFirstLaunch = await checkIfFirstLaunch();
    console.log('componentWillMount->isFirstLaunch:'+isFirstLaunch);
    this.setState({ firstLaunchState: isFirstLaunch });
    //this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
    //console.log('componentWillMount->isFirstLaunch:'+isFirstLaunch);
    
  }

  componentDidMount() {
    Font.loadAsync({
      'open-sans-bold': require('./src/fonts/OpenSans-Bold.ttf'),
      'open-sans-regular': require('./src/fonts/OpenSans-Regular.ttf'),
      'raleway-regular': require('./src/fonts/Raleway-Regular.ttf'),
      'raleway-bold': require('./src/fonts/Raleway-Bold.ttf')  
    });
  }
  render() {
    console.log('In render()')
    const { firstLaunchState } = this.state;
    console.log('App-firstLaunchState'+firstLaunchState)
      //const { hasCheckedAsyncStorage, isFirstLaunch } = this.state;
      //console.log('App-hasCheckedAsyncStorage'+hasCheckedAsyncStorage)
      //console.log('App-isFirstLaunch'+isFirstLaunch)
      // if(firstLaunchState == false){
      //   return <LoadingScreen {...this.props}/>;
      // }
      // if(firstLaunchState == null) {
      //   return <LoadingScreen {...this.props}/>;
      // }
      // if(firstLaunchState == true) {
      //   return <AppNavigator/>;
      // }
      return  <AppNavigator/>;
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
