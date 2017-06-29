import { StackNavigator } from 'react-navigation'

import Home from './Views/Home'
import LayoutAnimation from './Views/LayoutAnimation'
import Animated from './Views/Animated'

export default StackNavigator({
  Home: { screen: Home },
  LayoutAnimation: { screen: LayoutAnimation },
  Animated: { screen: Animated }
})
