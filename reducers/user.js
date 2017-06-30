import { handleActions } from 'redux-actions'

const initialState = {
  user: {},
  error: false,
  loading: false
}

export default handleActions({
  initLogin (state, action) {
    return {
      ...state,
      loading: true
    }
  },

  errorLogin (state, action) {
    return {
      ...state,
      loading: false,
      error: true
    }
  },

  resolveLogin (state, action) {
    return {
      loading: false,
      error: false,
      user: action.payload
    }
  }
}, initialState)
