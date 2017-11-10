import axios from 'axios'

export function create_ctf(attributes) {
  return axios.post('/ctfs', {
    ctf: attributes
  })
}

export function fetchCtfs() {
  return axios.get('/ctfs')
}

export function fetchCtf(id) {
  return axios.get(`/ctfs/${id}`)
}
