import { handleActions } from 'redux-actions'

const initialState = {}

export default handleActions({
  'add item': (state, action) => {
    return {
      ...state,
      [action.payload]: {
        id: action.payload,
        count: action.payload in state ? state[action.payload].count + 1 : 1
      }
    }
  },

  'remove remove': (state, action) => {
    if (action.payload in state) {
      let count = (action.payload in state) && state[action.payload].count - 1
      if (count === 0) {
        let newState = {...state}
        delete newState[action.payload]
        return newState
      }

      return {
        ...state,
        [action.payload]: {
          id: action.payload,
          count: count <= 0 ? 0 : count
        }
      }
    } else {
      return {...state}
    }
  }
}, initialState)
