import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


function Item({title, subtitle, duration, index, selectSong}) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {
        selectSong(index);
      }}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailPart}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

export default function SongList(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.tracks}
        renderItem={({ item, index, separators }) => <Item title={item.title} subtitle={item.subtitle} duration={item.duration} index={index} selectSong={props.selectSong} />}
        // keyExtractor={item => item.index.toString()}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    // backgroundColor: 'green'
  },
  item: {
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: '#f9c2ff',
    // backgroundColor: 'blue',
    color: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 21,
    fontFamily: "raleway-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 25,
    color: "#5E6063"
  },
  detailPart: {
    flex: 1,
    flexDirection: 'row'
  },
  subtitle: {
    flex: 3,
    fontSize: 14,
    fontFamily: "raleway-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 25,
    letterSpacing: 0.388889,
    color: "#7B7B7B"
  },
  duration: {
    flex: 1,
    fontSize: 14,
    fontFamily: "raleway-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 14,    
    color: "#9D9D9C"
  }
});
