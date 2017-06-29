
import React, {Component} from 'react'
import {
  Animated,
  Text,
  View,
  StyleSheet
} from 'react-native'

export default class FadeInView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fadeAnim: new Animated.Value(-400)  // Initial value for opacity: 0
    }
  }

  componentDidMount () {
    setTimeout(() => {
      Animated.spring(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 0,                   // Animate to opacity: 1 (opaque)
          duration: 4000              // Make it take a while
        }
      ).start()                        // Starts the animation
    }, (600 + (30 * this.props.pos)))
  }

  componentWillUnmount () {
    Animated.spring(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: -400,                   // Animate to opacity: 1 (opaque)
        duration: 10              // Make it take a while
      }
    ).start()                        // Starts the animation
  }

  render () {
    let { fadeAnim } = this.state

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          left: fadeAnim       // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}
