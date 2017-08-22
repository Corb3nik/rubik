import axios from 'axios'

export function fetch(ctfId, challengeId) {
  return axios.get(`/ctfs/${ctfId}/challenges/${challengeId}/dirb`)
}

export function reset(ctfId, challengeId) {
  return axios.post(`/ctfs/${ctfId}/challenges/${challengeId}/dirb/reset`)
}

export function run(ctfId, challengeId) {
  return axios.post(`/ctfs/${ctfId}/challenges/${challengeId}/dirb/run`)
}
