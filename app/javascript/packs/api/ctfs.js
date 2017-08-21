import axios from 'axios'

export function create_ctf(attributes) {
  return axios.post('/ctfs', {
    ctf: attributes
  })
}

export function fetch_ctfs() {
  return axios.get('/ctfs')
}

export function fetch_ctf(id) {
  return axios.get(`/ctfs/${id}`)
}
