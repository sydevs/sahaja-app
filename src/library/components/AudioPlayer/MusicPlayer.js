import React, { Component, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
// import Player from './Player';
import Player from './Player';
import SongList from './SongList';
import { View, StyleSheet, Text } from 'react-native';
// import i18n from '../../Assets/I18n/i18n';
// import { Actions } from 'react-native-router-flux';

export default function MusicPlayer({ route, navigation }) {
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
    },{
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
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/9/fc99914b4e.jpg",
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
      "url": "https://assets.wemeditate.co/uploads/track/12/Setar_Dashti_.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/2/Nirmal_Nair_B_W.jpg",
      "duration": null
    }, {
      "index": 9,
      "name": "Persian Vibes | Segah Avaz",
      "artists": [{
        "name": "Nirmal Nair",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/11/Segah_Avaz.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/2/Nirmal_Nair_B_W.jpg",
      "duration": null
    }, {
      "index": 10,
      "name": "Persian Vibes | Rast-Panjgah Story",
      "artists": [{
        "name": "Rishi Nair",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/9/Rast-Panjgah_Story.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/7/Rishi_Nair_B_W.jpg",
      "duration": null
    }, {
      "index": 11,
      "name": "Santoor | Ambient",
      "artists": [{
        "name": "Rishi Nair",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/10/Santoor_Kaushik_Ranjani__edited_wemeditate_.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/7/Rishi_Nair_B_W.jpg",
      "duration": null
    }, {
      "index": 12,
      "name": "Sitar | Raag Bhairavi",
      "artists": [{
        "name": "Leo Vertunni",
        "url": "http://indialucia.com"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/6/Raga_Bhairavi_by_Leo_Vertunni.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/1/28da8663c3.jpg",
      "duration": null
    }, {
      "index": 13,
      "name": "Flute | Raag Lalit",
      "artists": [{
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/13/Shakthidhar_-_Dhyanastha-absorbed_in_Meditation_-_01_Raga_Lalit_Aalap.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": null
    }, {
      "index": 14,
      "name": "Flute | Raag Durga",
      "artists": [{
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/14/Shakthidhar_-_Dhyanastha-absorbed_in_Meditation_-_04_Raga_Durga_Aalap.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": null
    }, {
      "index": 15,
      "name": "Flute | Raag Durga p.2",
      "artists": [{
        "name": "Shakthidhar Iyer",
        "url": "https://www.shakthidhar.com/"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/15/Shakthidhar_-_Dhyanastha-absorbed_in_Meditation_-_05_Raga_Durga_Madhyalaya_Teentaal.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/8/4d892b21f6.jpg",
      "duration": null
    }, {
      "index": 16,
      "name": "Flute | Soothing vibes ",
      "artists": [{
        "name": "Nirmal Nair",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/8/Flute_Nirmal_Nair.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/2/Nirmal_Nair_B_W.jpg",
      "duration": null
    }, {
      "index": 17,
      "name": "Sitar | Raag Yaman ",
      "artists": [{
        "name": "Leo Vertunni",
        "url": "http://indialucia.com"
      }],
      "url": "https://assets.wemeditate.co/uploads/track/7/Surbahar__raag_Yaman_-_Leo_Vertunni.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/1/28da8663c3.jpg",
      "duration": null
    }, {
      "index": 18,
      "name": "Shlokas | Sahasrara",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/33/7._Sahasrara.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "05:25"
    }, {
      "index": 19,
      "name": "Shlokas | Agya",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/34/6._Agya.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "02:17"
    }, {
      "index": 20,
      "name": "Shlokas | Vishuddhi",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/30/5._Vishuddhi.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "04:10"
    }, {
      "index": 21,
      "name": "Shlokas | Shiva",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/28/4._Shiva.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "02:27"
    }, {
      "index": 22,
      "name": "Shlokas | Jagadamba",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/29/4a._Jagadamba.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "03:59"
    }, {
      "index": 23,
      "name": "Shlokas | Void",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/27/3a._Void.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "02:24"
    }, {
      "index": 24,
      "name": "Shlokas | Nabhi",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/26/Nabhi.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "03:47"
    }, {
      "index": 25,
      "name": "Shlokas | Swadishtan",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/25/Swadishtan.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "03:40"
    }, {
      "index": 26,
      "name": "Shlokas | Mooladhara",
      "artists": [{
        "name": "Nicki Wells",
        "url": ""
      }],
      "url": "https://assets.wemeditate.co/uploads/track/24/Mooladhara.mp3",
      "cover_art_url": "https://assets.wemeditate.co/uploads/artist/image/11/f574462d2e.jpg",
      "duration": "03:43"
    }],
    "playlists": {
      "2": {
        "title": "Vocal",
        "cover_art_url": "https://assets.wemeditate.co/uploads/instrument_filter/icon/2/vocal.svg",
        "songs": [0, 1, 2, 18, 19, 20, 21, 22, 23, 24, 25, 26]
      },
      "3": {
        "title": "Wind",
        "cover_art_url": "https://assets.wemeditate.co/uploads/instrument_filter/icon/3/flute.svg",
        "songs": [3, 4, 5, 6, 7, 13, 14, 15, 16]
      },
      "1": {
        "title": "Strings",
        "cover_art_url": "https://assets.wemeditate.co/uploads/instrument_filter/icon/1/sitar.svg",
        "songs": [5, 6, 7, 8, 9, 10, 11, 12, 17]
      },
      "4": {
        "title": "Nature",
        "songs": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    }
  }
  // const TRACKS = [
  //   {
  //     title: 'Raag Yaman',
  //     subtitle: 'By Leo Vertunni',
  //     albumArtUrl: "https://assets.wemeditate.co/uploads/artist/image/1/28da8663c3.jpg",
  //     audioUrl: "https://assets.wemeditate.co/uploads/track/7/Surbahar__raag_Yaman_-_Leo_Vertunni.mp3"
  //   },
  //   {
  //     title: 'Setar Dashti',
  //     subtitle: 'By Nirmal Nair',
  //     albumArtUrl: "https://assets.wemeditate.co/uploads/artist/image/2/Nirmal_Nair_B_W.jpg",
  //     audioUrl: "https://assets.wemeditate.co/uploads/track/12/Setar_Dashti_.mp3"
  //   }
  // ];

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
  const {playlistId} = route.params;
  // const {playlistId} = props.route.params;
  const [currentSong, setCurrentSong] = useState(0);
  const [currentPlaylist, setCurrentPlaylist] = useState("1");
  // const TRACKS = [...playlistTracks[props.navigation.getParam('playlistId').toString()].tracks];
  // console.log('tracks: ', TRACKS);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      if (currentPlaylist !== playlistId.toString()) {
        setCurrentPlaylist(playlistId.toString());
      }

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );


  const selectSong = (index) => {
    // console.log('select song: ', index);
    setCurrentSong(index);
  }

  return (
    <View style={styles.container}>
      <View style={styles.player} >
        <Player currentIndex={currentSong} setSong={setCurrentSong} tracks={playlistTracks[currentPlaylist].tracks} displayBackForward={true} />
      </View>
      <Text style={styles.playlistTitle}>{playlistTracks[currentPlaylist].title}</Text>
      <View style={styles.list}>
        <SongList tracks={playlistTracks[currentPlaylist].tracks} selectSong={selectSong} />
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
    // backgroundColor: 'red',
    color: 'black',
  },
  player: {
    flex: 2,
    alignSelf: 'stretch',
  },
  playlistTitle: {
    marginTop: 10,
    fontSize: 24,
    fontFamily: "raleway-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 31,
    letterSpacing: 0.45,
    color: "#7B7B7B"
  },
  list: {
    flex: 1,
    alignSelf: 'stretch',
  }
});
