import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView
} from 'react-native'

const CustomLayoutAnimation = {
  duration: 800,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.4
  },
  delete: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity
  }
}

export default class AnimationExample extends Component {

  constructor () {
    super()

    this.state = {
      index: 0,
      lista: [1]
    }
  }

  onPress (index) {
    // Uncomment to animate the next state change.
    // [easeInEaseOut, linear, spring]
    LayoutAnimation.configureNext(CustomLayoutAnimation)

    // Or use a Custom Layout Animation
    // LayoutAnimation.configureNext(CustomLayoutAnimation);

    this.setState({index: index})
  }

  renderButton (index) {
    return (
      <TouchableOpacity key={'button' + index} style={styles.button} onPress={() => this.onPress(index)}>
        <Text>{index}</Text>
      </TouchableOpacity>
    )
  }

  renderCircle (key) {
    var size = 50
    return (
      <View key={key} style={{width: size, height: size, borderRadius: size / 2.0, backgroundColor: 'sandybrown', margin: 20}} />
    )
  }

  add () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    this.setState({
      lista: [...this.state.lista, 1]
    })
  }

  remove () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    let { lista } = this.state
    lista.pop()
    this.setState({
      lista: lista
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.add.bind(this)} style={styles.button}>
            <View>
              <Text>Add</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.remove.bind(this)} style={styles.button}>
            <View>
              <Text>Remove</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {this.state.lista.map((_, idx) => {
            return (
              <View style={styles.box} key={idx}>
                <Text>Producto: {idx}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#ababab',
    borderBottomWidth: 1
  },
  button: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: '#fff',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ababab',
    borderWidth: 1,
    margin: 10
  }
})
