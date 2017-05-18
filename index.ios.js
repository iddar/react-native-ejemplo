import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './store'

import { addNavigationHelpers } from 'react-navigation'

const store = configureStore()

import AppNavigator from './ruter'

class App extends Component {
  render () {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })} />
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
