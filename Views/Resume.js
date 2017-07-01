
import React, { Component } from 'react'

import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as apiActions from '../actions/api'

// import Icon from 'react-native-vector-icons/Ionicons'
import Product from '../components/Product'

const {height, width} = Dimensions.get('window')

class HomeScreen extends Component {
  componentWillMount () {
    let { cart, actions } = this.props
    actions.getResume(this.parseCart(cart))
  }

  parseCart (cart) {
    let cartArray = Object.keys(cart).map((el) => {
      return {
        [el]: cart[el]
      }
    })

    return cartArray
  }

  render () {
    let { resume } = this.props
    return (
      <Image style={styles.bg} source={require('../assets/free_space.png')} resizeMode={'cover'}>
        <ScrollView>
          {resume.map(el => {
            return (
              <Product
                info={el}
                key={el.id}
                actions={actions}
                count={el.count || 0} />
            )
          })}
        </ScrollView>
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
  header: {
    backgroundColor: 'transparent',
    padding: 15,
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    backgroundColor: '#fffa'
  },
  headerText: {
    color: '#000',
    fontSize: 20
  },
  headerTextBold: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 25
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
    cart: store.cart,
    resume: store.resume
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
