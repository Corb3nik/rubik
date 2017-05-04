import axios from 'axios'

export function fetch_modules() {
  return axios.get('/modules/')
}
