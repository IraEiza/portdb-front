import axios from 'axios'

const API = axios.create({
  baseURL: 'https://portapi-7i1v.onrender.com/api/'
})

async function signup(newUser) {
  try {
    const {data} = await API.post('auth/signup', newUser, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    })
    return data
  } catch (error) {
    return {error: error.message}
  }
}

async function login(user) {
  try {
    const {data} = await API.post('auth/login', user, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }) 
    return data
  } catch(error) {
    return {error: error.message}
  }
}

export default {
  signup,
  login,
}
