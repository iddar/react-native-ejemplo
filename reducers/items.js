import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
  list (state, action) {
    return [...action.payload]
  }
}, initialState)
