import { AsyncStorage } from 'react-native';

const HAS_LAUNCHED = 'hasLaunched';

function setAppLaunched() {
  AsyncStorage.setItem(HAS_LAUNCHED, 'true');
}

export async function appLaunched() {
    setAppLaunched()
}

export default async function checkIfFirstLaunch() {
  try {
      await AsyncStorage.clear()
     const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
     console.log('checkIfFirstLaunch->hasLaunched:'+hasLaunched)
    // if (hasLaunched === null) {
    //   setAppLaunched();
    //   return true;
    // }
    // return false;
     return hasLaunched;
  } catch (error) {
    return false;
  }
}