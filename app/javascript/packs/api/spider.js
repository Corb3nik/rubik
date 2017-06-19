import axios from 'axios'

export function fetch() {
  return axios.get('spider')
}

export function reset() {
  return axios.post('spider/reset')
}

export function run() {
  return axios.post('spider/run')
}
