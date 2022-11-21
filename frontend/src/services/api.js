import axios from 'axios'

const API = axios.create({
  baseURL: 'https://portapi-7i1v.onrender.com/api/'
})

async function signup(newUser) {
  try {
    const response = await API.post('auth/signup', newUser, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    })
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('email', response.data.email)
    return response
  } catch (error) {
    return 'error'
  }
}

async function login(user) {
  try {
    const response = await API.post('auth/login', user, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }) 
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('email', response.data.email)
    return response
  } catch(error) {
    return 'error'
  }
}

async function getProfileInfo() {
  const response = await API.get('profile', {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}

export default {
  signup,
  login,
  getProfileInfo
}
