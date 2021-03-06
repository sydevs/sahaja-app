import React, { Component, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
// import { useFocusEffect } from '@react-navigation/native';
// import Player from './Player';
import Player from './Player';
import SongList from './SongList';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
// import i18n from '../../Assets/I18n/i18n';
// import { Actions } from 'react-native-router-flux';
import Back from '../../../res/svgs/Back'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function MusicPlayer( props ) {
  const SONGS = {
    "songs": [{
      "index": 0,
      "name": "Malkauns",
      "artists": [{
        "name": "Koushik Aithal",
        "url": "https://sahajsongs.bandcamp.com/album/music-and-meditation"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/17/Koushik_Aithal_-_Music_and_Meditation_-_04_Void-_Malkauns.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/10/dec2ac0840.jpg",
      "duration": "03:16"
    }, {
      "index": 1,
      "name": "Shyam Kalyan",
      "artists": [{
        "name": "Koushik Aithal",
        "url": "https://sahajsongs.bandcamp.com/album/music-and-meditation"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/16/Koushik_Aithal_-_Music_and_Meditation_-_01_Mooladhara-_Shyam_Kalyan.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/10/dec2ac0840.jpg",
      "duration": "03:32"
    }, {
      "index": 2,
      "name": "Jaijaivanti",
      "artists": [{
        "name": "Koushik Aithal",
        "url": "https://sahajsongs.bandcamp.com/album/music-and-meditation"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/18/Koushik_Aithal_-_Music_and_Meditation_-_06_Vishuddhi-_Jaijaivanti.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/10/dec2ac0840.jpg",
      "duration": "03:07"
    }, {
      "index": 3,
      "name": "Abhogi",
      "artists": [{
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/19/Shakthidhar_Iyer_-_Music_and_Meditation_-_03_Nabhi-_Abhogi.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": "04:38"
    }, {
      "index": 4,
      "name": "Bageshri",
      "artists": [{
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/20/Shakthidhar_Iyer_-_Music_and_Meditation_-_07_Agnya-_Bageshri.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": "03:24"
    }, {
      "index": 5,
      "name": "Yaman",
      "artists": [{
        "name": "Paulo Vinícius",
        "url": "https://seveneyesofficial.com/"
      }, {
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/21/Shakthidhar_Iyer__Paulo_Vinícius_-_Music_and_Meditation_-_02_Swadhishthana-_Yaman.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": "03:58"
    }, {
      "index": 6,
      "name": "Durga",
      "artists": [{
        "name": "Paulo Vinícius",
        "url": "https://seveneyesofficial.com/"
      }, {
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/22/Shakthidhar_Iyer__Paulo_Vinícius_-_Music_and_Meditation_-_05_Anahat-_Durga.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/9/fc99914b4e.jpg",
      "duration": "04:13"
    }, {
      "index": 7,
      "name": "Bhairavi",
      "artists": [{
        "name": "Koushik Aithal",
        "url": "https://sahajsongs.bandcamp.com/album/music-and-meditation"
      }, {
        "name": "Paulo Vinícius",
        "url": "https://seveneyesofficial.com/"
      }, {
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/23/Shakthidhar_Iyer__Paulo_Vinícius__Koushik_Aithal_-_Music_and_Meditation_-_08_Sahasrara-_Bhairavi.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": "04:35"
    }, {
      "index": 8,
      "name": "Setar Dashti",
      "artists": [{
        "name": "Nirmal Nair",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/12/Setar_Dashti.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/2/Nirmal_Nair_B_W.jpg",
      "duration": "04:19"
    }, {
      "index": 9,
      "name": "Persian Vibes | Segah Avaz",
      "artists": [{
        "name": "Nirmal Nair",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/11/Segah_Avaz.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/2/Nirmal_Nair_B_W.jpg",
      "duration": "03:04"
    }, {
      "index": 10,
      "name": "Persian Vibes | Rast-Panjgah Story",
      "artists": [{
        "name": "Rishi Nair",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/9/Rast-Panjgah_Story.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/7/Rishi_Nair_B_W.jpg",
      "duration": "22:01"
    }, {
      "index": 11,
      "name": "Sitar | Raag Bhairavi",
      "artists": [{
        "name": "Leo Vertunni",
        "url": "http://indialucia.com"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/6/Raga_Bhairavi_-_Leo_Vertunni.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/1/28da8663c3.jpg",
      "duration": "10:41"
    }, {
      "index": 12,
      "name": "Flute | Raag Lalit",
      "artists": [{
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/13/Shakthidhar_-_Raga_Lalit_Aalap.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": "03:34"
    }, {
      "index": 13,
      "name": "Flute | Raag Durga",
      "artists": [{
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/14/Shakthidhar_-_Raga_Durga_Aalap.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": "03:20"
    }, {
      "index": 14,
      "name": "Flute | Raag Durga p.2",
      "artists": [{
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/15/Shakthidhar_-_Raga_Durga_Madhyalaya_Teentaal.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": "18:25"
    }, {
      "index": 15,
      "name": "Flute | Soothing vibes ",
      "artists": [{
        "name": "Nirmal Nair",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/8/Flute_Nirmal_Nair.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/2/Nirmal_Nair_B_W.jpg",
      "duration": "11:03"
    }, {
      "index": 16,
      "name": "Sitar | Raag Yaman ",
      "artists": [{
        "name": "Leo Vertunni",
        "url": "http://indialucia.com"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/7/Surbahar_Raag_Yaman_-_Leo_Vertunni.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/1/28da8663c3.jpg",
      "duration": "24:50"
    }, {
      "index": 17,
      "name": "Shlokas | Sahasrara",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/33/7._Sahasrara.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "05:25"
    }, {
      "index": 18,
      "name": "Shlokas | Agya",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/34/6._Agya.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "02:17"
    }, {
      "index": 19,
      "name": "Shlokas | Vishuddhi",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/30/5._Vishuddhi.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "04:10"
    }, {
      "index": 20,
      "name": "Shlokas | Shiva",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/28/4._Shiva.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "02:27"
    }, {
      "index": 21,
      "name": "Shlokas | Jagadamba",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/29/4a._Jagadamba.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "03:59"
    }, {
      "index": 22,
      "name": "Shlokas | Void",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/27/3a._Void.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "02:24"
    }, {
      "index": 23,
      "name": "Shlokas | Nabhi",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/26/Nabhi.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "03:47"
    }, {
      "index": 24,
      "name": "Shlokas | Swadishtan",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/25/Swadishtan.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "03:40"
    }, {
      "index": 25,
      "name": "Shlokas | Mooladhara",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/24/Mooladhara.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "03:43"
    }, {
      "index": 26,
      "name": "Santoor | Ambient",
      "artists": [{
        "name": "Rishi Nair",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/10/Santoor_Kaushik_Ranjani.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/7/Rishi_Nair_B_W.jpg",
      "duration": "19:46"
    }, {
      "index": 27,
      "name": "Ocean Sound",
      "artists": [{
        "name": "We Meditate",
        "url": ""
      }],
      "url": "https://we-meditate.s3-ap-southeast-2.amazonaws.com/ocean-sound.mp3",
      "cover_art_url": "https://we-meditate.s3-ap-southeast-2.amazonaws.com/ocean-sound.jpg",
      "duration": "2:06"
    },{
      "index": 28,
      "name": "Rainfall",
      "artists": [{
        "name": "We Meditate",
        "url": ""
      }],
      "url": "https://we-meditate.s3-ap-southeast-2.amazonaws.com/rainfall.mp3",
      "cover_art_url": "https://we-meditate.s3-ap-southeast-2.amazonaws.com/rainfall.png",
      "duration": "10:00"
    },{
      "index": 29,
      "name": "Stream",
      "artists": [{
        "name": "We Meditate",
        "url": ""
      }],
      "url": "https://we-meditate.s3-ap-southeast-2.amazonaws.com/stream.mp3",
      "cover_art_url": "https://we-meditate.s3-ap-southeast-2.amazonaws.com/stream.png",
      "duration": "10:01"
    }],
    "playlists": {
      "2": {
        "title": "Vocal",
        "cover_art_url": "https://assets.wemeditate.co/uploads/instrument_filter/icon/2/vocal.svg",
        "songs": [0, 1, 2, 17, 18, 19, 20, 21, 22, 23, 24, 25]
      },
      "3": {
        "title": "Wind",
        "cover_art_url": "https://assets.wemeditate.co/uploads/instrument_filter/icon/3/flute.svg",
        "songs": [3, 4, 5, 6, 7, 12, 13, 14, 15]
      },
      "1": {
        "title": "Strings",
        "cover_art_url": "https://assets.wemeditate.co/uploads/instrument_filter/icon/1/sitar.svg",
        "songs": [5, 6, 7, 8, 9, 10, 11, 16, 26]
      },
      "4": {
        "title": "Nature",
        "cover_art_url": "https://we-meditate.s3-ap-southeast-2.amazonaws.com/nature.jpg",
        "songs": [27,28,29]
      }
    }
  }
  

  const generatePlaylistTracks = (songs) => {
    let playlistTracks = songs.playlists;
    for (const [key, value] of Object.entries(songs.playlists)) {
      let TRACKS = SONGS.songs.reduce((accumm, currentSong) => {
        if (value.songs.includes(currentSong.index)) {
          accumm.push({
            index: currentSong.index,
            title: currentSong.name,
            subtitle: 'By ' + currentSong.artists[0].name,
            albumArtUrl: currentSong.cover_art_url,
            audioUrl: encodeURI(currentSong.url),
            duration: currentSong.duration
          });
        }

        return accumm;
      }, []);

      playlistTracks[key]['tracks'] = TRACKS;
    }
    return playlistTracks;
  }

  const playlistTracks = generatePlaylistTracks(SONGS);
  const playlistId = props.navigation.getParam('playlistId');
  // const isFocused = props.navigation.isFocused();
  // console.log('FOCUSED: ', isFocused);
  // const {playlistId} = props.route.params;
  const [currentSong, setCurrentSong] = useState(0);
  // const [currentPlaylist, setCurrentPlaylist] = useState("1");
  // const TRACKS = [...playlistTracks[props.navigation.getParam('playlistId').toString()].tracks];
  // console.log('tracks: ', TRACKS);

  // Need to convert this back to react navigation 4
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // Do something when the screen is focused
  //     if (currentPlaylist !== playlistId.toString()) {
  //       setCurrentPlaylist(playlistId.toString());
  //     }

  //     return () => {
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //     };
  //   }, [])
  // );


  const selectSong = (index) => {
    // console.log('select song: ', index);
    if (index !== currentSong && index > 0 && index <= playlistTracks[playlistId].tracks.length - 1) {
      setCurrentSong(index); 
    }
  }

  const advanceIndex = () => {
    if (currentSong < playlistTracks[playlistId].tracks.length - 1) {
      setCurrentSong(prevSong => prevSong + 1)
    } else if (currentSong === playlistTracks[playlistId].tracks.length - 1) {
      setCurrentSong(0)
    }
  }

  const handlePreviousTrack = () => {
    console.log('currentSong: ', currentSong)
    if (currentSong > 0) {
      setCurrentSong(prevSong => prevSong - 1)
    }
  }

  const handleNextTrack = () => {
    console.log('currentSong: ', currentSong)
    console.log('length: ', playlistTracks[playlistId].tracks.length)
    if (currentSong < playlistTracks[playlistId].tracks.length - 1) {
      setCurrentSong(prevSong => prevSong +1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ height: hp("5.85%")}} />
      <View style={{ height: hp("5.55%"),alignSelf:'flex-start',left: wp('6.4%')}} >
        <TouchableOpacity onPress={() => {
            props.navigation.navigate({
                routeName:  'Music'
            })
        }}>
            <View style={styles.circleButton}>
                        <Back></Back>
            </View>
        </TouchableOpacity>
      </View>
        
      <View style={styles.player} >
        <Player
        currentIndex={currentSong}
        setSong={setCurrentSong}
        tracks={playlistTracks[playlistId].tracks}
        displayBackForward={true}
        handlePreviousTrack={handlePreviousTrack}
        handleNextTrack={handleNextTrack}
        advanceIndex={advanceIndex}
        screenFocused={props.isFocused}
        />
      </View>
      <Text style={styles.playlistTitle}>PlayList: {playlistTracks[playlistId].title}</Text>
      <View style={styles.list}>
        <SongList tracks={playlistTracks[playlistId].tracks} selectSong={selectSong} />
      </View>
    </View>
  )
}

// MusicPlayer.defaultProps = {
//   playlist: 1
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    color: 'black',
  },
  circleButton:{
    flex:1,
    height: hp('5.55%'),
    width: hp('5.55%'),  //The Width must be the same as the height
    borderRadius: hp('27.28%'), //Then Make the Border Radius twice the size of width or Height 
    backgroundColor: '#DCDCDC',
    alignItems: "baseline",
        justifyContent: 'center'
  },
  player: {
    flex: 1,
    alignSelf: 'stretch'
  },
  playlistTitle: {
    //marginTop: 10,
    fontSize: 24,
    fontFamily: "raleway-bold",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: hp('4.64%'),
    letterSpacing: 0.45,
    color: "#7B7B7B",
    //backgroundColor: 'yellow'
  },
  list: {
    flex: 1,
    alignSelf: 'stretch',
    //backgroundColor: 'red'
  }
});

export default withNavigationFocus(MusicPlayer);