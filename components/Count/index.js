import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>{this.props.repos}</Text>
          <Text style={styles.title}>repos</Text>
        </View>
        <View style={[styles.box, styles.boxDos]}>
          <Text style={styles.title}>{this.props.stars}</Text>
          <Text style={styles.title}>stars</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#303F9F'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#EC407A'
  },
  boxDos: {
    backgroundColor: '#2196F3'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    color: '#2196F3',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})
