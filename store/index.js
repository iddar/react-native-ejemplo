import { createStore, applyMiddleware } from 'redux'
import app from '../reducers'
import thunk from 'redux-thunk'

const logger = store => next => action => {
  console.log(action)
  return next(action)
}

export default function configureStore () {
  let store = createStore(app, applyMiddleware(thunk, logger))
  return store
}
