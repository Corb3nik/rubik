import axios from 'axios'

export function fetch(ctfId, challengeId) {
  return axios.get(`/ctfs/${ctfId}/challenges/${challengeId}/spider`)
}

export function reset(ctfId, challengeId) {
  return axios.post(`/ctfs/${ctfId}/challenges/${challengeId}/spider/reset`)
}

export function run(ctfId, challengeId) {
  return axios.post(`/ctfs/${ctfId}/challenges/${challengeId}/spider/run`)
}
