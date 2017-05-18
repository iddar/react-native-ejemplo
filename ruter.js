import { StackNavigator } from 'react-navigation'

import Home from './Views/Home'
import Todo from './Views/Todo'

export default StackNavigator({
  Home: { screen: Home },
  Todo: { screen: Todo }
})
