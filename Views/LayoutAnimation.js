
import React, {Component} from 'react'
import { Animated, Text, View } from 'react-native'

class FadeInView extends Component {
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
        toValue: 2000,                   // Animate to opacity: 1 (opaque)
        duration: 1              // Make it take a while
      }
    ).start()                        // Starts the animation
  }

  render () {
    let { fadeAnim } = this.state

    return (
      <Animated.View                 // Special animatable View
        style={[
          this.props.style,
          {left: fadeAnim}       // Bind opacity to animated value
        ]}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        {[1, 2, 3, 4, 5].map((pos) => (
          <FadeInView key={pos} pos={pos} style={{flex: 1, backgroundColor: 'powderblue', margin: 5, justifyContent: 'center'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
          </FadeInView>
        ))}
      </View>
    )
  }
}
