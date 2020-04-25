import { createAppContainer} from 'react-navigation'
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

const AppNavigator = createStackNavigator({
  LoadingScreen: LoadingScreen,
  Home: HomeScreen,
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


export default createAppContainer(AppNavigator);