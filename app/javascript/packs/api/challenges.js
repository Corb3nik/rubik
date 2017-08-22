import axios from 'axios'

export function create_challenge(ctf_id, attributes) {
  return axios.post(`/ctfs/${ctf_id}/challenges`, {
    challenge: attributes
  })
}

export function fetch_challenges(ctf_id) {
  return axios.get(`/ctfs/${ctf_id}/challenges`)
}

export function fetch_challenge(ctf_id, challenge_id) {
  return axios.get(`/ctfs/${ctf_id}/challenges/${challenge_id}`)
}
