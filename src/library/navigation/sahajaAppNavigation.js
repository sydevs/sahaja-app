import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen';
import Meditation from '../screens/Meditation';
import Music from '../screens/Music';
import SelfRealization from '../screens/SelfRealization'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
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
  Home: HomeScreen,
  LoadingScreen: LoadingScreen,
  Meditation: Meditation,
  Music: Music,
  SelfRealization: SelfRealization,
  VideoPlayer: VideoPlayer,
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
      }
    }
  },
  Meditate : {
    screen: Meditation,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MeditateIcon/>
      },
      tabBarVisible: false
    }
  },
  Music: {
    screen: Music,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MusicIcon/>
      },
      tabBarVisible: false
    }
  }
},{
  tabBarOptions: {
    activeTintColor: '#FFDDA6',
    style: {
      fontFamily: 'raleway-regular',
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#7B7B7B",
      fontSize: 14
    }
  }
});


export default createAppContainer(bottomTabNavigator);