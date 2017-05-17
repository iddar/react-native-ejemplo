import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import Header from './components/Header'
import Count from './components/Count'
import List from './components/List'

class HomeScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        name: 'Iddar olivares',
        job: 'Nijan'
      },
      repos: 12,
      stars: 32
    }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Header user={this.state.user} />
        <Count repos={this.state.repos} stars={this.state.stars} />
        <List />
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Welcome'
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }
})

AppRegistry.registerComponent('SimpleApp', () => SimpleApp)
