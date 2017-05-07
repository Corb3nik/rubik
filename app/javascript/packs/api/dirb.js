import axios from 'axios'

export function fetch() {
  return axios.get('dirb')
}

export function reset() {
  return axios.post('dirb/reset')
}

export function run() {
  return axios.post('dirb/run')
}
