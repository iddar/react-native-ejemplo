import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as githubActions from '../actions/github'

import Header from '../components/Header'
// import Count from './components/Count'
import List from '../components/List'

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
    // const { navigate } = this.props.navigation
    // const { actions } = this.props
    const navigate = () => null
    return (
      <View style={{flex: 1}}>
        <Header user={this.state.user} navigate={navigate} />
        <Text onPress={() => this.props.navigation.navigate('Color', {name: 'Red', color: '#FF0000'})}>
          Red
        </Text>
        <Text onPress={() => this.props.navigation.navigate('Color', {name: 'Green', color: '#00FF00'})}>
          Green
        </Text>
        <Text onPress={() => this.props.navigation.navigate('Color', {name: 'Blue', color: '#0000FF'})}>
          Blue
        </Text>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Welcome'
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(githubActions, dispatch)
  }
}

function mapStateToProps (store) {
  return {
    gifs: store.gifs
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
