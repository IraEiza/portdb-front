<template>
  <div id="form">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Introduce your name" v-model="newUser.name">
      </div>
      <div class="mb-3">
        <label for="dni" class="form-label">DNI / Passport</label>
        <input type="text" class="form-control" id="dni" placeholder="Introduce your DNI or passport"
          v-model="newUser.dni">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
          placeholder="Introduce your email" v-model="newUser.email">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Introduce your password"
          v-model="newUser.password">
      </div>
      <div class="mb-3">
        <label for="password2" class="form-label">Password confirmation</label>
        <input type="password" class="form-control" id="password2" placeholder="Confirm your password"
          v-model="password2">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="signupUser">Submit</button>
    </form>
  </div>
</template>

<script>
import api from '../services/api.js';
import { useAuthStore } from '../stores/store'

export default {
  data() {
    return {
      newUser: {
        name: '',
        dni: '',
        email: '',
        password: ''
      },
      password2: '',
      store: useAuthStore()
    }
  },
  methods: {
    async signupUser() {
      if (this.newUser.password !== this.password2) {
        alert('Password doesn\'t match')
      }
      else {
        const data = await api.signup(this.newUser)
        if (data.error) {
          alert('Error creating account: ' + data.error)
        }
        else {
          this.store.login(data.token, data.email)
          this.$router.push({ name: 'profile' })
        }
      }
    }
  }
}
</script>

<style scoped>
#form {
  width: 90vw;
  padding: 15px;
  margin: 20px auto;
  border: solid black 1px;
  border-radius: 10px/10px;
  background-color: rgb(247, 219, 171);
}
@media (min-width: 720px){
  #form {
    width: 40vw;
  }
}
</style>