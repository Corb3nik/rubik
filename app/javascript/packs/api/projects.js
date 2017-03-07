import axios from 'axios'

export function create_project(project) {
  return axios.post('projects', project)
}

export function fetch_projects() {
  return axios.get('projects')
}

export function fetch_project(id) {
  return axios.get(`projects/${id}`)
}
