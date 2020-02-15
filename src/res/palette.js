import colors from './colors'

const palette = {
  heading: {
    color: colors.title,
    fontSize: 20,
    textAlign: 'center'
  },
  text: {
    color: colors.text,
    fontSize: 17,
    textAlign: 'center'
  }
}

export default palette


// Then you can use it like below
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center'
//   },
//   heading: {...palette.heading, ...{
//     marginTop: 72
//   }}
// })