import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.img} />
        <View style={styles.box}>
          <Text
            onPress={() => this.props.navigate('Todo')}
            style={styles.title}>{this.props.user.name}</Text>
          <Text style={styles.text}>{this.props.user.job}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#303F9F',
    padding: 50,
  },
  box: {
    marginLeft: 10
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
