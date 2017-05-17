import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

export default class HomeScreen extends Component {
  constructor (props) {
      super(props)
      this.state = {
        repos: []
      }
  }

  componentDidMount () {
    fetch('https://api.github.com/users/iddar/repos')
      .then(r => r.json())
      .then(r => {
        let a = r.map(e => e.name)
        this.setState({
          repos: a
        })
      })
  }
  render () {
    let { repos } = this.state
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Repos</Text>
        {repos.map((repo, key) => (
          <View key={key} style={styles.item}>
            <View style={styles.circle}></View>
            <Text style={styles.textItem}>{repo}</Text>
          </View>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold'
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textItem: {
    marginLeft: 10
  },
  circle: {
    borderRadius: 5,
    height: 10,
    width: 10,
    backgroundColor: '#43A047'
  }
})
