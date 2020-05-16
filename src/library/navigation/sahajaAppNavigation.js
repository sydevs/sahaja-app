// import { createAppContainer } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
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

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="LoadingScreen" component={LoadingScreen} />
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="FirstExperience" component={FirstExperience} />
      <HomeStack.Screen name="YourFirstMeditation" component={YourFirstMeditation} />
      <HomeStack.Screen name="SelfRealization" component={SelfRealization} />
      <HomeStack.Screen name="VideoPlayer" component={VideoPlayer} />
    </HomeStack.Navigator>
  );
}

const MeditateStack = createStackNavigator();
function MeditateStackScreen() {
  return (
    <MeditateStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MeditateStack.Screen name="Meditation" component={Meditation} />
      <MeditateStack.Screen name="ChooseDuration" component={ChooseDuration} />
    </MeditateStack.Navigator>
  )
}

const MusicStack = createStackNavigator();
function MusicStackScreen() {
  return (
    <MusicStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MusicStack.Screen name="Music" component={Music} />
      <MusicStack.Screen name="MusicPlayer" component={MusicPlayer} />
    </MusicStack.Navigator>
  )
}

// const AppNavigator = createStackNavigator({
//   LoadingScreen: LoadingScreen,
//   Home: HomeScreen,
//   Meditation: Meditation,
//   Music: Music,
//   SelfRealization: SelfRealization,
//   VideoPlayer: VideoPlayer,
//   MusicPlayer: MusicPlayer,
//   ChooseDuration: ChooseDuration,
//   FirstExperience: FirstExperience,
//   YourFirstMeditation: YourFirstMeditation
// },{
//   defaultNavigationOptions: {
//     headerShown: false
//   }
// });

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
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
          height: (Platform.OS === 'ios') ? 35 : 17
        },
        labelStyle: {
          fontSize: 15,
          fontFamily: 'raleway-regular',
          fontStyle: "normal",
          color: '#7B7B7B',
          top: 12
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <HomeIcon/>
          )
        }}
        />
      <Tab.Screen
        name="Meditate"
        component={MeditateStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MeditateIcon />
          )
        }}
        />
      <Tab.Screen
        name="Music"
        component={MusicStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MusicIcon />
          )
        }}
        />
    </Tab.Navigator>
  );
}


// const bottomTabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: AppNavigator,
//     navigationOptions: {
//       tabBarIcon: (tabInfo) => {
//         return <HomeIcon/>
//       },
//       tabBarVisible: true
//     }
//   },
//   Meditate : {
//     screen: Meditation,
//     navigationOptions: {
//       tabBarIcon: (tabInfo) => {
//         return <MeditateIcon/>
//       },
//       tabBarVisible: true
//     }
//   },
//   Music: {
//     screen: Music,
//     navigationOptions: {
//       tabBarIcon: (tabInfo) => {
//         return <MusicIcon/>
//       },
//       tabBarVisible: true
//     }
//   }
// },{
//   headerMode: 'none',        // I don't want a NavBar at top
//   tabBarPosition: 'bottom',
//   tabBarOptions: {
//     activeTintColor: '#FFDDA6',
//     showIcon: true,
//     style: {
//       fontFamily: 'raleway-regular',
//       fontStyle: "normal",
//       fontWeight: "normal",
//       color: "#7B7B7B",
//       fontSize: 14,
//       padding: 20,
//       height: (Platform.OS === 'ios') ? 48 : 50
//     },
//     iconStyle: {
//       flexGrow: 0,
//       marginTop: 1.5,
//       padding: 0,
//       height: 30,
//       width: 30,
//       borderColor: 'black',
//       borderWidth: 2
//     },
//     showLabel: (Platform.OS !== 'android'),
//     tabStyle: {
//       height: (Platform.OS === 'ios') ? 35 : 17
//     },
//     labelStyle: {
//       fontSize: 15,
//       fontFamily: 'raleway-regular',
//       fontStyle: "normal",
//       color: '#7B7B7B',
//       top: 12
//     }
//   }
// });


// export default createAppContainer(bottomTabNavigator);
export default function AppNavigator() {
  return (<NavigationContainer>
    {/* <MyStack /> */}
    <MyTabs />
  </NavigationContainer>);
} 