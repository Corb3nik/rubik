import axios from 'axios'

export function create_challenge(ctf_id, challenge) {
  return axios.post(`${ctf_id}/challenges`, {
    challenge
  })
}

export function fetch_challenges(ctf_id) {
  return axios.get(`${ctf_id}/challenges`)
}

export function fetch_challenge(ctf_id, id) {
  return axios.get(`${ctf_id}/challenges/${id}`)
}
