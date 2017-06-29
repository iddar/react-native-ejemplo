/* global fetch */
function getURL (query) {
  const key = '2268bdf85bc44c6fa6ea918701a4b0db'
  return `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=25&offset=0&rating=G&lang=en`
}

export const searchGif = (query) => dispatch => {
  fetch(getURL(query))
        .then(response => response.json())
        .then(obj => {
          let links = obj.data.map((item) => item.images.fixed_height_small.url)
          dispatch({type: 'saveGifs', payload: links})
        })
}

export const getRepos = (user_name = 'iddar') => dispatch => {
  fetch(`https://api.github.com/users/${user_name}`)
    .then(response => response.json())
    .then(user => {
      dispatch({
        type: 'repos',
        payload: {
          name: user.name,
          avatar: user.avatar_url,
          repos: user.public_repos
      }})
    })
}
