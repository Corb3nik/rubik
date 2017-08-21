import axios from 'axios'

export function fetch(ctf_id, challenge_id) {
  return axios.get(`/ctfs/${ctf_id}/challenges/${challenge_id}/dirb`)
}

export function reset(ctf_id, challenge_id) {
  return axios.post(`/ctfs/${ctf_id}/challenges/${challenge_id}/dirb/reset`)
}

export function run(ctf_id, challenge_id) {
  return axios.post(`/ctfs/${ctf_id}/challenges/${challenge_id}/dirb/run`)
}
