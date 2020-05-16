import React, { Component, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const AlbumArt = ({
  url,
  onPress
}) => {
  const [size, setSize] = useState([250, 250]);
  return (
    <View style={styles.container} onLayout={(event) => {
      var { x, y, width, height } = event.nativeEvent.layout;
      setSize([height - 20, height - 20]);
    }}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.image, {
            elevation: 10, shadowColor: '#d9d9d9',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 2,
            borderRadius: 20,
            backgroundColor: '#ffffff'
          }]}
        >
          <Image
            style={[styles.image, { borderRadius: 20, width: size[0], height: size[1] }]}
            source={{ uri: url }}
            resizeMode={'cover'}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default AlbumArt;

const { width, height } = Dimensions.get('window');
const imageSize = width - 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    // flex: 1,
    // width: 30,
    // width: imageSize,
    // height: 300,
    // width: 300,
    // width: '100%',
    // height: '100%',
    // width: undefined,
    // height: undefined,
  },
})