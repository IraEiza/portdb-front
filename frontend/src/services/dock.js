import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'https://portapi-7i1v.onrender.com/api/'
})

async function getAvailableDocks(days) {
  const response = await API.post('/docks/available', days)
  return response.data
}

async function reserveDock(resData) {
  const store = useAuthStore()
  const response = await API.post('docks/reserve', resData, {
    headers: {
      token: store.userToken
    }
  })
  return response.data
}

export default {
  getAvailableDocks,
  reserveDock
}