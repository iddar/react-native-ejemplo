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
    const navigate = () => null
    return (
      <View style={{flex: 1}}>
        <Header user={this.state.user} navigate={navigate} />
        {/* <Count repos={this.state.repos} stars={this.state.stars} /> */}
        <Text onPress={() => this.props.navigation.navigate('Todo', {name: 'Lucy'})}>
          Respos
        </Text>
        <List repos={this.props.github.repos} />
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

function mapStateToProps (state) {
  return {
    github: state.github
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
