import axios from 'axios'

export function create_challenge(ctfId, attributes) {
  return axios.post(`/ctfs/${ctfId}/challenges`, {
    challenge: attributes
  })
}

export function fetchChallenges(ctfId) {
  return axios.get(`/ctfs/${ctfId}/challenges`)
}

export function fetchChallenge(ctfId, challengeId) {
  return axios.get(`/ctfs/${ctfId}/challenges/${challengeId}`)
}
