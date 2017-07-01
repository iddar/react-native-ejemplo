import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
  resume (state, action) {
    return [...action.payload]
  }
}, initialState)
