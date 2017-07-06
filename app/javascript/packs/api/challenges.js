import axios from 'axios'

export function create_challenge(project) {
  return axios.post('challenges', {
    project
  })
}

export function fetch_challenges() {
  return axios.get('challenges')
}

export function fetch_challenge(id) {
  return axios.get(`challenges/${id}`)
}
