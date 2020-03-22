import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen';
import Meditation from '../screens/Meditation';
import Music from '../screens/Music';
import SelfRealization from '../screens/SelfRealization'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Meditation: Meditation,
  Music: Music,
  SelfRealization: SelfRealization,
  VideoPlayer: VideoPlayer
});


export default createAppContainer(AppNavigator);