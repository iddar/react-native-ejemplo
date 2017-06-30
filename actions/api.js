
import * as fake from '../lib/fakeAPI'

// login fake.login(user: 'string', password: 'string > 8')
// Get all items fake.list()
// fake.ticket([
//   {id: 'D08', count: 3},
//   {id: 'C07', count: 1}
// ])

export const login = (user, password) => dispatch => {
  fake.login(user, password)
    .then(user => {
      dispatch({type: 'resolveLogin', payload: user})
    })
}
