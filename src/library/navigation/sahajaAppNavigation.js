import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen';
import Meditation from '../screens/Meditation';
import Music from '../screens/Music';
import MusicChoose from '../screens/MusicChoose';
import MeditationChoose from "../screens/MeditationChoose"


const AppNavigator = createStackNavigator({
  Home : HomeScreen,
  Meditation : Meditation,
  Music : Music,
  ChooseMusic: MusicChoose,
  ChooseMediation : MeditationChoose
});


export default createAppContainer(AppNavigator);