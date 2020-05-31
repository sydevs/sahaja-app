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

export default createAppContainer(AppNavigator);