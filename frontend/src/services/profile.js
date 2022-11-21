import axios from 'axios'

const API = axios.create({
  baseURL: 'https://portapi-7i1v.onrender.com/api/'
})

async function getProfile() {
  const result = await API.get('profile')
  /* console.log(result) */
  return result.data 
}

export default {
  getProfile
}