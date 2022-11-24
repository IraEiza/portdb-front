import axios from 'axios'
import { useAuthStore } from '../stores/store'

const API = axios.create({
  baseURL: 'https://portapi-7i1v.onrender.com/api/'
})

async function getProfileInfo() {
  const store = useAuthStore()
  const response = await API.get('profile', {
    headers: {
      token: store.userToken
    }
  })
  return response.data
}

async function getOwnBills() {
  const store = useAuthStore()
  const response = await API.get('profile/bills', {
    headers: {
      token: store.userToken
    }
  })
  return response.data
}

async function addOwnShip(newShip) {
  const store = useAuthStore()
  const response = await API.post('profile/ships', newShip, {
    headers: {
      token: store.userToken
    }
  })
  return response.data
}

async function payBill(paymentId) {
  const store = useAuthStore()
  const response = await API.put('profile/pay', paymentId, {
    headers: {
      token: store.userToken
    }
  })
  return response.data
}

async function updateProfile(newData) {
  const store = useAuthStore()
  const response = await API.put('profile/updateProfile', newData, {
    headers: {
      token: store.userToken
    }
  })
  return response.data
}

async function updateShip(newData, shipId) {
  const store = useAuthStore()
  const response = await API.put(`profile/updateShip/${shipId}`, newData, {
    headers: {
      token: store.userToken
    }
  })
  return response.data
}

export default {
  getProfileInfo,
  getOwnBills,
  addOwnShip,
  payBill,
  updateProfile,
  updateShip
}