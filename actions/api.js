
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

export const getItems = () => dispatch => {
  fake.list()
    .then(list => {
      dispatch({type: 'list', payload: list})
    })
}

export const getResume = (resume) => dispatch => {
  fake.ticket(resume)
    .then(list => {
      dispatch({type: 'resume', payload: list})
    }).catch(() => {
      console.warn('fails')
    })
}

export const addITem = (id) => dispatch => {
  dispatch({type: 'add item', payload: id})
}

export const removeItem = (id) => dispatch => {
  dispatch({type: 'remove remove', payload: id})
}
