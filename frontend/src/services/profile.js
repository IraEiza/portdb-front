import axios from 'axios'

const API = axios.create({
  baseURL: 'https://portapi-7i1v.onrender.com/api/'
})

async function getProfile() {
    API.get('users')
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log(error))
}

export default {
  getProfile
}