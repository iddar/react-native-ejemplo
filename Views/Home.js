import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as apiActions from '../actions/api'

// import Icon from 'react-native-vector-icons/Ionicons'
// import Bt from '../components/Bt'
const {height, width} = Dimensions.get('window')

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }

  onChange (name, value) {
    this.setState({
      [name]: value
    })
  }

  login () {
    let { navigate } = this.props.navigation
    let { actions } = this.props
    let { name, password } = this.state
    actions.login(name, password)
    navigate('Shop')
  }

  render () {
    return (
      <Image style={styles.bg} source={require('../assets/free_space.png')} resizeMode={'cover'}>
        <View style={styles.content}>
          <Text style={styles.title}>login</Text>
          <TextInput
            onChangeText={this.onChange.bind(this, 'name')}
            value={this.state.name}
            style={styles.input} placeholder='username' placeholderTextColor='#fff' />
          <TextInput
            onChangeText={this.onChange.bind(this, 'password')}
            value={this.state.password}
            style={styles.input} placeholder='password' placeholderTextColor='#fff' secureTextEntry />

          <Text style={styles.buttom} onPress={this.login.bind(this)}>start</Text>
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 50
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: '#fff'
  },
  buttom: {
    textAlign: 'center',
    fontSize: 35,
    marginTop: 20,
    textDecorationLine: 'underline',
    backgroundColor: 'transparent',
    color: '#fff',
    width: width * 0.8
  },
  input: {
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ababab3f',
    backgroundColor: '#ffffff0e',
    padding: 10,
    marginTop: 15,
    color: '#fff',
    width: width * 0.8
  }
})

HomeScreen.navigationOptions = {
  title: 'Welcome'
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(apiActions, dispatch)
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
