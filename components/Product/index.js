import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const {height, width} = Dimensions.get('window')

export default ({info, actions, count = 0}) => (
  <View style={styles.touch}>
    <View style={styles.container}>
      <Text style={styles.title}>{info.item}</Text>
      <Text style={styles.price}>${info.price.toFixed(2).toLocaleString()}</Text>
    </View>
    <View style={styles.actions}>
      <Icon onPress={() => actions.removeItem(info.id)} size={25} name='remove-shopping-cart' color='#000' />
      <Text style={styles.count}>{count}</Text>
      <Icon onPress={() => actions.addITem(info.id)} size={25} name='add-shopping-cart' color='#000' />
    </View>
  </View>
)

const styles = StyleSheet.create({
  touch: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    width: width - 10,
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: '#ababab0f',
    backgroundColor: '#fff8'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  count: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginRight: 20
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  actions: {
    flexDirection: 'row',
    backgroundColor: '#fff8',
    alignItems: 'center',
    padding: 20
  }
})
