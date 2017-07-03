import axios from 'axios'

export function fetch() {
  return axios.get('wappalyzer')
}

export function reset() {
  return axios.post('wappalyzer/reset')
}

export function run() {
  return axios.post('wappalyzer/run')
}
