import axios from 'axios'

export function fetch(ctf_id, challenge_id) {
  return axios.get(`/ctfs/${ctf_id}/challenges/${challenge_id}/spider`)
}

export function reset(ctf_id, challenge_id) {
  return axios.post(`/ctfs/${ctf_id}/challenges/${challenge_id}/spider/reset`)
}

export function run(ctf_id, challenge_id) {
  return axios.post(`/ctfs/${ctf_id}/challenges/${challenge_id}/spider/run`)
}
