import axios from 'axios'

export function fetch(ctfId, challengeId) {
  return axios.get(`/ctfs/${ctfId}/challenges/${challengeId}/wappalyzer`)
}

export function reset(ctfId, challengeId) {
  return axios.post(`/ctfs/${ctfId}/challenges/${challengeId}/wappalyzer/reset`)
}

export function run(ctfId, challengeId) {
  return axios.post(`/ctfs/${ctfId}/challenges/${challengeId}/wappalyzer/run`)
}
