import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native'

import configureStore from './store'

const store = configureStore()

import AppNavigator from './ruter'

class App extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <AppNavigator
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav
          })} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App)

const SimpleApp = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)

AppRegistry.registerComponent('SimpleApp', () => SimpleApp)
