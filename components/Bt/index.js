import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default ({title, to}) => (
  <TouchableOpacity onPress={to} style={styles.touch}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#b2b2b2'
  },
  title: {
    fontWeight: 'bold'
  }
})
