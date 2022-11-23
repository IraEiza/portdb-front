import axios from 'axios'

const API = axios.create({
  baseURL: 'https://portapi-7i1v.onrender.com/api/'
})

async function getAvailableDocks(days) {
  const response = await API.post('/docks/available', days)
  return response.data
}

async function reserveDock(resData) {
  const response = await API.post('docks/reserve', resData, {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}

export default {
  getAvailableDocks,
  reserveDock
}