import { StackNavigator } from 'react-navigation'

import Home from './Views/Home'
import Todo from './Views/Todo'
import Color from './Views/Color'

export default StackNavigator({
  Home: { screen: Home },
  Color: { screen: Color },
  Todo: { screen: Todo }
})
