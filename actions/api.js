
import * as fake from '../lib/fakeAPI'

export const login = (user, password) => dispatch => {
  console.log('init')
  fake.login(user, password)
    .then(user => {
      dispatch({type: 'login', payload: user})
      console.log(user)
    })
}
