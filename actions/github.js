/* global fetch */

export const getRepos = (user_name = 'iddar') => dispatch => {
  fetch(`https://api.github.com/users/${user_name}/repos`)
    .then(response => response.json())
    .then(repos => {
      let names = repos.map(repo => repo.name)
      dispatch({type: 'repos', payload: names})
    })
}
