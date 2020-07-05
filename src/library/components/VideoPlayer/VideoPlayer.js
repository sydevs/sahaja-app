import React,{useState} from 'react';
import {View , Text, StyleSheet, SafeAreaView,Dimensions,TouchableOpacity} from 'react-native'
import { Video } from 'expo-av';
import Back from '../../../res/svgs/Back'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const { width, height } = Dimensions.get('window')
const VideoPlayer  = props => {
    const id = props.navigation.getParam('id');
    const videoUrl = props.navigation.getParam('videoUrl');
    const [isMute,setMute] = useState(false)
    const _onPlaybackStatusUpdate = (playbackStatus) => {
        if (playbackStatus.didJustFinish){
          // The player has just finished playing and will stop.
          console.log('video finished, going to meditation screen ...')
          props.navigation.navigate({ routeName:  'Meditation'}) 
        }
    };

    const didBlurSubscription = props.navigation.addListener(
        'didBlur',
        payload => {
          //console.debug('didBlur', payload);
          setMute(true)
        }
      );


    return (
         <SafeAreaView style={styles.screen}>
                <Video
                ref={this._handleVideoRef}
                onPlaybackStatusUpdate={(playbackStatus) => _onPlaybackStatusUpdate(playbackStatus)}
                source={{ uri: videoUrl }}
                rate={1.0}
                volume={1.0}
                isMuted={isMute}
                resizeMode="cover"
                shouldPlay
                useNativeControls
                style={styles.video}
                />
                <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-start', top: hp('3%'), left: wp('3%') }} onPress={() => {
                    props.navigation.navigate({
                            routeName:  'Meditation'
                        })
                    }}>
                      <View style={styles.circleButton}>
                        <Back></Back>
                      </View>
                </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    circleButton:{
        flex:1,
        height: hp('5.55%'),
        width: hp('5.55%'),  //The Width must be the same as the height
        borderRadius: hp('27.28%'), //Then Make the Border Radius twice the size of width or Height 
        backgroundColor: '#D3D3D3',
        alignItems: "baseline",
        justifyContent: 'center'
      },
    video: {
        width: wp('100%'),
        height: hp('100%')
    }
});

export default VideoPlayer; 