import {createStackNavigator, createAppContainer} from 'react - navigation'
import HomeScreen from '../screens/HomeScreen';
import Meditation from '../screens/Meditation';
import Music from ' ../screens/Music';

const AppNavigator = createStackNavigator({
  Home : HomeScreen,
  Meditation : Meditation,
 Music
});

/*const AppNavigatorPart2 = createStackNavigator({
  Home :HomeScreen,
  Music : Music,
  Meditation : Meditation,
  
});
*/
export default createAppContainer(AppNavigator);