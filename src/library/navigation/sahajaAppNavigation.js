import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen';
import Meditation from '../screens/Meditation';
import Music from '../screens/Music';
import SelfRealization from '../screens/SelfRealization'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import ChooseDuration from '../screens/ChooseDuration'
import colors from '../../res/colors'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Meditation: Meditation,
  Music: Music,
  SelfRealization: SelfRealization,
  VideoPlayer: VideoPlayer,
  ChooseDuration: ChooseDuration
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.title
  } ,
  headerTintColor: 'white'
  }
});


export default createAppContainer(AppNavigator);