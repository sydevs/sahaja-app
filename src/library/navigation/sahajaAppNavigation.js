import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen';
import Meditation from '../screens/Meditation';
import Music from '../screens/Music';

const AppNavigator = createStackNavigator({
  Home : HomeScreen,
  Meditation : Meditation,
  Music : Music
});


export default createAppContainer(AppNavigator);