<template>
  <div id="page">
    <header>

      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div v-if="!store.isLoggedIn">
            <RouterLink :to="{ name: 'signup' }"><button id="signup" class="btn btn-primary">Signup</button>
            </RouterLink>
            &nbsp;
            <RouterLink :to="{ name: 'login' }"><button id="login" class="btn btn-primary">Login</button></RouterLink>
          </div>
          <div v-else class="text-white">
            <strong> Welcome</strong> {{ store.userEmail }}
            <RouterLink :to="{ name: 'home' }"><button @click="logout" class="btn btn-primary">Logout</button>
            </RouterLink>
          </div>
        </div>
      </nav>

      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h6">
            <RouterLink class="nav-bar" :to="{ name: 'home' }">HOME</RouterLink>
          </h5>
          <h5 class="text-white h6" >
            <RouterLink class="nav-bar" :to="{ name: 'profile' }" v-if="store.isLoggedIn">PROFILE</RouterLink>
          </h5>
          <h5 class="text-white h6">
            <RouterLink class="nav-bar" :to="{ name: 'reservation' }">RESERVATION</RouterLink>
          </h5>
          <h5 class="text-white h6">
            <RouterLink class="nav-bar" :to="{ name: 'others' }">OTHER SERVICES</RouterLink>
          </h5>
        </div>
      </div>

    </header>

    <section id="view">
      <RouterView />
    </section>

    <footer id="footer">
      <h6>© PORT-Utatis 25/11/2022</h6>
    </footer>
  </div>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/store'

export default {
  data() {
    return {
      store: useAuthStore()
    }
  },
  methods: {
    logout() {
      this.store.logout()
    }
  }
}

</script>

<style scoped>
#page {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

#heather {
  background-color: cornflowerblue;
  color: white;
  width: 100vw;
  height: 15vh;
  padding: 10px;
}

#view {
  align-self: stretch;
}

#footer {
  background-color: cornflowerblue;
  margin-top: auto;
  color: white;
  width: 100vw;
  height: 10vh;
  padding: 10px;
}
.nav-bar {
  color: rgb(219, 216, 208);
  text-decoration: none;
}

.nav-bar:hover {
  font-weight: 700;
  background-color: rgb(65, 72, 78);
  padding: 5px 15px;
  border-radius: 10px/10px;
}

</style>
