
import * as fake from '../lib/fakeAPI'

// login fake.login(user: 'string', password: 'string > 8')
// Get all items fake.list()
// fake.ticket([
//   {id: 'D08', count: 3},
//   {id: 'C07', count: 1}
// ])

export const login = (user, password) => dispatch => {
  console.log('init')
  fake.login(user, password)
    .then(user => {
      dispatch({type: 'login', payload: user})
      console.log(user)
    })
}
