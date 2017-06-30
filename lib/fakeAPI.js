import _ from 'lodash'

function delay (ms) {
  let time = ms || _.random(300, 1000)
  return new Promise(resolve => setTimeout(resolve, time))
}

const userResponse = {
  name: 'iddar',
  email: 'iddar@mail.local',
  token: '·$2%2&32323%23222$2382382765EDFGY23%3$3W2352343DFTREW'
}

const items = [
  {id: 'D08', item: 'Leche', price: 18.90},
  {id: 'D02', item: 'Huevos', price: 34.40},
  {id: 'D03', item: 'Cereal', price: 46.50},
  {id: 'C04', item: 'Coca-Cola 2,5L', price: 27.34},
  {id: 'C07', item: 'Churros', price: 8.00},
  {id: 'R01', item: 'Donita', price: 7.30}
]

export async function login (user, password) {
  await delay()
  if (user === password) throw new Error('Invalid user and password')
  if (password.length < 8) throw new Error('Invalid length user and password')

  return {
    ...userResponse,
    name: user
  }
}

export async function list () {
  await delay()
  return items
}

export async function ticket (resume) {
  await delay()

  let reduce = resume.reduce((reduce, item) => {
    let product = items.find(i => i.id === item.id)
    reduce.push({
      ...product,
      total: item.count * product.price
    })
    return reduce
  }, [])

  return reduce
}
