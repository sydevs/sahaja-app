import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import R from 'res/R'

export default class ImageButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.touchable} onPress={this.props.onPress}>
        <View style={styles.view}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
        <Image
          source={R.images.button}
          style={styles.image} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  image: {
  
},
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: R.colors.button,
    fontSize: 18,
    textAlign: 'center'
  }
})