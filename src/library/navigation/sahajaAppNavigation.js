import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import {View,Platform} from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import Meditation from '../screens/Meditation';
import Music from '../screens/Music';
import SelfRealization from '../screens/SelfRealization'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import MusicPlayer from '../components/AudioPlayer/MusicPlayer'
import ChooseDuration from '../screens/ChooseDuration'
import colors from '../../res/colors'
import LoadingScreen from '../screens/LoadingScreen'
import FirstExperience from '../screens/FirstExperience'
import YourFirstMeditation from '../screens/YourFirstMeditation'
import MeditateIcon from '../../res/svgs/Meditate'
import MusicIcon from '../../res/svgs/Music'
import HomeIcon from '../../res/svgs/Home'
import React from 'react'

const AppNavigator = createStackNavigator({
  LoadingScreen: LoadingScreen,
  Home: HomeScreen,
  Meditation: Meditation,
  Music: Music,
  SelfRealization: SelfRealization,
  VideoPlayer: VideoPlayer,
  MusicPlayer: MusicPlayer,
  ChooseDuration: ChooseDuration,
  FirstExperience: FirstExperience,
  YourFirstMeditation: YourFirstMeditation
},{
  defaultNavigationOptions: {
    headerShown: false
  }
});

const bottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <HomeIcon/>
      },
      tabBarVisible: false
    }
  },
  Meditate : {
    screen: Meditation,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MeditateIcon/>
      },
      tabBarVisible: true
    }
  },
  Music: {
    screen: Music,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MusicIcon/>
      },
      tabBarVisible: true
    }
  }
},{
  headerMode: 'none',        // I don't want a NavBar at top
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#FFDDA6',
    showIcon: true,
    style: {
      fontFamily: 'raleway-regular',
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#7B7B7B",
      fontSize: 14,
      padding: 20,
      height: (Platform.OS === 'ios') ? 48 : 50
    },
    iconStyle: {
      flexGrow: 0,
      marginTop: 1.5,
      padding: 0,
      height: 30,
      width: 30,
      borderColor: 'black',
      borderWidth: 2
    },
    showLabel: (Platform.OS !== 'android'),
    tabStyle: {
      height: 20
    },
    labelStyle: {
      fontSize: 15,
      fontFamily: 'raleway-regular',
      fontStyle: "normal",
      color: '#7B7B7B',
      top: 10
    }
  }
});

export default createAppContainer(bottomTabNavigator);