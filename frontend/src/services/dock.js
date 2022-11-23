import axios from 'axios'

const API = axios.create({
  baseURL: 'https://portapi-7i1v.onrender.com/api/'
})

async function getAvailableDocks() {
  const response = await API.get('docks/available')
  return response.data
}

export default {
  getAvailableDocks
}