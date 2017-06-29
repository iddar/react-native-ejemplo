import { StackNavigator } from 'react-navigation'

import Home from './Views/Home'
import LayoutAnimation from './Views/LayoutAnimation'
import Animated from './Views/Animated'
import Shop from './Views/Shop'

export default StackNavigator({
  Home: { screen: Home },
  LayoutAnimation: { screen: LayoutAnimation },
  Shop: { screen: Shop },
  Animated: { screen: Animated }
})
