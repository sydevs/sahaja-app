import React, { Component } from 'react';
// import Player from './Player';
import Player from 'expo-audioplayer';
import { BackHandler } from 'react-native';
// import i18n from '../../Assets/I18n/i18n';
// import { Actions } from 'react-native-router-flux';
export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const TRACKS = [
      {
        title: 'Raag Yaman',
        subtitle: 'By Leo Vertunni',
        albumArtUrl: "https://assets.wemeditate.co/uploads/artist/image/1/28da8663c3.jpg",
        audioUrl: "https://assets.wemeditate.co/uploads/track/7/Surbahar__raag_Yaman_-_Leo_Vertunni.mp3"
      },
      {
        title: 'Setar Dashti',
        subtitle: 'By Nirmal Nair',
        albumArtUrl: "https://assets.wemeditate.co/uploads/artist/image/2/Nirmal_Nair_B_W.jpg",
        audioUrl: "https://assets.wemeditate.co/uploads/track/12/Setar_Dashti_.mp3"
      }
    ];
    return <Player tracks={TRACKS} displayBackForward={false}/>
  }
}