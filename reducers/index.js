import { combineReducers } from 'redux'
import user from './user'
import items from './items'
import cart from './cart'
import resume from './resume'

import AppNavigator from '../ruter'

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
)

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

const rootReducer = combineReducers({
  nav: navReducer,
  user,
  items,
  cart,
  resume
})

export default rootReducer
