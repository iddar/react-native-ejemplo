import { handleActions } from 'redux-actions'

const initialState = {
  user: 'iddar',
  repos: []
}

export default handleActions({
  repos (state, action) {
    return {
      ...state,
      repos: action.payload
    }
  }
}, initialState)
