import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native'

export default class Todo extends Component {
  render () {
    let { name, color } = this.props.navigation.state.params
    return (
      <View style={[styles.container, {backgroundColor: color}]}>
        <Text style={styles.title}>{name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40
  }
})
