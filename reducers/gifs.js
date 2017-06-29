import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
  saveGifs (state, action) {
    return [...action.payload]
  }
}, initialState)
