import axios from 'axios'

const API = axios.create({
  baseURL: 'https://portapi-7i1v.onrender.com/api/'
})

async function getProfileInfo() {
  const response = await API.get('profile', {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}

async function getOwnBills() {
  const response = await API.get('profile/bills', {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}

async function addOwnShip(newShip) {
  const response = await API.post('profile/ships', newShip, {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}

async function payBill(paymentId) {
  const response = await API.put('profile/pay', paymentId, {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}

async function updateProfile(newData) {
  const response = await API.put('profile/updateProfile', newData, {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}

export default {
  getProfileInfo,
  getOwnBills,
  addOwnShip,
  payBill,
  updateProfile
}