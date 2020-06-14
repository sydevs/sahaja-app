import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
// import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';
// import Video from 'react-native-video';
import { Audio } from 'expo-av';

// Some coded adapted from https://github.com/expo/playlist-example/blob/master/App.js

const LOADING_STRING = "... loading ...";
const BUFFERING_STRING = "...buffering...";
const DISABLED_OPACITY = 0.5;

class Player extends Component {
  constructor(props) {
    super(props);
    this.playbackInstance = null;
    this.state = {
      shouldPlay: false,
      isPlaying: false,
      previouslyPlay: false,
      volume: 1.0,
      isBuffering: false,
      paused: true,
      repeatOn: false,
      shuffleOn: false,
      playbackInstanceName: LOADING_STRING,
      playbackInstancePosition: 0,
      playbackInstanceDuration: 0,
      shouldPlay: false,
      isBuffering: false,
      isLoading: true,
      shouldCorrectPitch: true,
      rate: 1.0,
    };
  }

  async loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      // this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }

    const currentIndex = this.props.currentIndex;
    const { isPlaying, volume } = this.state;
    // console.log('isPlaying: ', isPlaying);

    const initialStatus = {
      shouldPlay: isPlaying,
      volume
    }

    const source = { uri: this.props.tracks[currentIndex].audioUrl }
    try {
      // console.log('about to create sound');
      // console.log('source: ', source);
 
      // console.log('about to load async');
      const { sound, status } = await Audio.Sound.createAsync(
        source,
        initialStatus,
        this.onPlaybackStatusUpdate
      );
      this.playbackInstance = sound;
      // const soundObject = new Audio.Sound();
      // soundObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      // const { sound, status } = await soundObject.loadAsync(source, initialStatus, false);
      // this.playbackInstance = sound;
      // console.log('instance after assing: ', this.playbackInstance);
      // const { sound, status } = await soundObject.loadAsync(source, initialStatus, false);
      // this.playbackInstance = sound;

      // console.log('loaded');
      // console.log('status: ', status);
      // console.log('sound: ', sound);
    } catch (e) {
      console.log('error with it');
      console.log(e)
    }

    console.log('out of load catch')

    this._updateScreenForLoading(false);
  }

  _updateScreenForLoading(isLoading) {
    if (isLoading) {
      this.setState({
        isPlaying: false,
        playbackInstanceName: LOADING_STRING,
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
        isLoading: true
      });
    } else {
      this.setState({
        playbackInstanceName: this.props.tracks[this.props.currentIndex].title,
        isLoading: false
      });
    }
  }

  onPlaybackStatusUpdate = status => {
    console.log('in status update: ', status)
    // console.log('still in status: ', this.playbackInstance)
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isLoading: false,
        isBuffering: status.isBuffering,
        volume: status.volume,
        shouldCorrectPitch: status.shouldCorrectPitch
      });
      if (status.didJustFinish && !status.isLooping) 
      {
        // this._advanceIndex(true);
        this.props.advanceIndex()
        this._updatePlaybackInstanceForIndex(true);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
    this.setState({
      isBuffering: status.isBuffering
    })
  }

  _onLoadStart = () => {
    console.log(`ON LOAD START`);
  };

  _onLoad = status => {
    console.log(`ON LOAD : ${JSON.stringify(status)}`);
  };

  _onError = error => {
    console.log(`ON ERROR : ${error}`);
  };

  // _advanceIndex(forward) {
  //   this.props.currentIndex = (this.props.currentIndex + (forward ? 1 : this.props.tracks.length - 1)) % this.props.tracks.length;
  //   this.loadNewPlaybackInstance(true);
  // }

  async _updatePlaybackInstanceForIndex(playing) {
    this._updateScreenForLoading(true);
    this.loadNewPlaybackInstance(playing);
  }


  handlePlayPause = async () => {
    console.log('press');
    console.log(this.playbackInstance);

    if (this.playbackInstance != null) {
      const status = await this.playbackInstance.getStatusAsync()
      console.log('status in play: ', status);
      if (!status.isLoaded) {
        const currentIndex = this.props.currentIndex;
        const { isPlaying, volume } = this.state;
        const initialStatus = {
          shouldPlay: isPlaying,
          volume
        }
        const source = { uri: this.props.tracks[currentIndex].audioUrl }
        this.playbackInstance.loadAsync(source, initialStatus, false)
      }

      
      if (this.state.isPlaying) {
        console.log('is playing')
        this.playbackInstance.pauseAsync();
      } else {
        console.log('is NOT playing')
        this.playbackInstance.playAsync();
      }
    } else {
      console.log('before play load');
      this.loadNewPlaybackInstance(true);
      console.log('after play load');
    }

  }

  handlePreviousTrack = async () => {
    this.props.handleNextTrack();
    // if (this.playbackInstance != null) {
    //   this._advanceIndex(false);
    //   this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
    // }
  }

  handleNextTrack = async () => {
    this.props.handlePreviousTrack();
    // if (this.playbackInstance != null) {
    //   this._advanceIndex(true);
    //   this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
    // }
  }


  async componentDidMount() {
    console.log('component mount')
    try {
      Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      })

      this.loadNewPlaybackInstance(false);
    } catch (e) {
      console.log(e)
    }
  }

  async componentDidUpdate(prevProps) {
    // console.log('screen focused: ', this.props.screenFocused);
    if (!this.props.screenFocused) {
      if (this.playbackInstance != null) {
        await this.playbackInstance.unloadAsync();
        // this.playbackInstance.setOnPlaybackStatusUpdate(null);
        this.playbackInstance = null;
      }
    } else {
      const currentIndex = this.props.currentIndex
      const previousIndex = prevProps.currentIndex

      if (currentIndex !== previousIndex && this.playbackInstance) {
        this.loadNewPlaybackInstance(false);
      } else if (this.playbackInstance === null) {
        console.log('here');
        // this.loadNewPlaybackInstance(false);
      }
    }

  }
 
  async seek(value) {
    // const { previouslyPlay, playbackInstance } = this.state;
    // await playbackInstance.setPositionAsync(value);
    // if (previouslyPlay) {
    //   await playbackInstance.playAsync();
    //   this.setState({
    //     isPlaying: true,
    //     previouslyPlay: false
    //   })
    // }
    if (this.playbackInstance != null) {
      this.isSeeking = false;
      const seekPosition = value * this.state.playbackInstanceDuration;
      if (this.shouldPlayAtEndOfSeek) {
        this.playbackInstance.playFromPositionAsync(seekPosition);
      } else {
        this.playbackInstance.setPositionAsync(seekPosition);
      }
    }
  }

  _getSeekSliderPosition() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return (
        this.state.playbackInstancePosition /
        this.state.playbackInstanceDuration
      );
    }
    return 0;
  }


  async sliding() {
    // console.log('sliding');
    // const { isPlaying, playbackInstance } = this.state;
    // if (isPlaying) {
    //   await playbackInstance.pauseAsync();
    //   this.setState({
    //     isPlaying: false,
    //     previouslyPlay: true
    //   });
    // }
    if (this.playbackInstance != null && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      this.playbackInstance.pauseAsync();
    }
  }

  render() {
    const track = this.props.tracks[this.props.currentIndex];
    return (
      <View style={styles.container}>
        {/* <StatusBar hidden={true} /> */}
        {/* <Header message="Playing From Charts" /> */}
        {this.props.displayArt ? <View style={styles.art}><AlbumArt url={track.albumArtUrl} /></View> : ''}
        <View style={styles.details}>
          <TrackDetails title={this.state.playbackInstanceName} subtitle={track.subtitle} />
        </View>
        <View style={[styles.seekbar,
        {
          opacity: this.state.isLoading ? DISABLED_OPACITY : 1.0
        }
        ]}>
          <SeekBar
            onSeek={this.seek.bind(this)}
            trackLength={this.state.playbackInstanceDuration}
            onSlidingStart={this.sliding.bind(this)}
            currentPosition={this.state.playbackInstancePosition}
            disabled={this.state.isLoading}
          />
        </View>
        <View style={[styles.controls,
        {
          opacity: this.state.isLoading ? DISABLED_OPACITY : 1.0
        }
        ]}>
          <Controls
            onPressRepeat={() => this.setState({ repeatOn: !this.state.repeatOn })}
            repeatOn={this.state.repeatOn}
            shuffleOn={this.state.shuffleOn}
            // forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
            onPressShuffle={() => this.setState({ shuffleOn: !this.state.shuffleOn })}
            onPressPlay={this.handlePlayPause}
            onPressPause={this.handlePlayPause}
            onBack={this.props.handlePreviousTrack}
            onForward={this.props.handleNextTrack}
            paused={!this.state.isPlaying}
            displayBackForward={this.props.displayBackForward}
            disabled={this.state.isLoading}
            />
        </View>
        {/* {video} */}
      </View>
    );
  }
}

Player.defaultProps = {
  displayArt: true,
  displayBackForward: true,
  playIndex: 0
}

const styles = {
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
  },
  audioElement: {
    height: 0,
    width: 0,
  },
  art: {
    flex: 5,
    // backgroundColor: 'red',
  },
  details: {
    flex: 1,
    marginTop: 0,
    // backgroundColor: 'blue',
  },
  seekbar: {
    flex: 1,
    marginTop: 0,
    // backgroundColor: 'red'
  },
  controls: {
    flex: 2,
    marginTop: 0,
  },
};

export default Player;