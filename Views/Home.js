import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as githubActions from '../actions/github'

import Bt from '../components/Bt'

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
    const { navigate } = this.props.navigation
    return (
      <View style={{flex: 1, paddingBottom: 20}}>
        <Bt title='Animated' to={() => navigate('Animated')} />
        <Bt title='LayoutAnimation' to={() => navigate('LayoutAnimation')} />
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
