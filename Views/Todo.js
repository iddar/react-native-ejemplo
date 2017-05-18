import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native'

export default class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      todos: []
    }
  }

  add () {
    this.setState({
      todos: this.state.todos.push(this.state.text)
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput
             style={{height: 40}}
             placeholder="Type here..."
             onChangeText={(text) => this.setState({text})}
            />
          <Button
          title="Add Item"
          style={{color: '#000'}}
          onPress={this.add.bind(this)}
          />
        </View>
        <View style={[styles.box, styles.list]}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303F9F'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#fff'
  },
  list: {
    backgroundColor: '#2196F3'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    color: '#2196F3',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})
