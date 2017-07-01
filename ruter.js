import { StackNavigator } from 'react-navigation'

import Home from './Views/Home'
import Shop from './Views/Shop'
import Resume from './Views/Resume'

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  Shop: {screen: Shop},
  Resume: {screen: Resume}
})
