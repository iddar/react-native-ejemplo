import { combineReducers } from 'redux'
import github from './github'
import gifs from './gifs'

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
  github: github,
  gifs: gifs
})

export default rootReducer
