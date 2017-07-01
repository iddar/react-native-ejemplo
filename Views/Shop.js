
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
    let { actions } = this.props
    actions.getItems()
  }

  parseCart (cart) {
    let totalCount = Object.keys(cart).reduce((reduce, el) => {
      return reduce + cart[el].count
    }, 0)

    return totalCount
  }

  render () {
    let { navigate } = this.props.navigation
    let { list, cart, actions } = this.props
    return (
      <Image style={styles.bg} source={require('../assets/free_space.png')} resizeMode={'cover'}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Tiene {this.parseCart(cart)} en su carrito</Text>
          <Text onPress={() => navigate('Resume')} style={styles.headerTextBold}> Pagar</Text>
        </View>
        <ScrollView>
          {list.map(el => {
            return (
              <Product
                info={el}
                key={el.id}
                actions={actions}
                count={el.id in cart ? cart[el.id].count : 0} />
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
    list: store.items,
    cart: store.cart
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
