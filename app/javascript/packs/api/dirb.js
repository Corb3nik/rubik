import axios from 'axios'

export function fetch_results(project_id) {
  return axios.get('dirb')
}
