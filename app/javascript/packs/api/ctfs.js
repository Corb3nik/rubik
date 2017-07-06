import axios from 'axios'

export function create_ctf(project) {
  return axios.post('ctfs', {
    project
  })
}

export function fetch_ctfs() {
  return axios.get('ctfs')
}

export function fetch_ctf(id) {
  return axios.get(`ctfs/${id}`)
}
