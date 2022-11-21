<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div id="page">
    <header>

           <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>      
          </button>
          <div >
            <RouterLink :to="{name: 'signup'}"><button id="signup" class="btn btn-primary">Signup</button></RouterLink>
            &nbsp;
            <RouterLink :to="{name: 'login'}"><button id="login" class="btn btn-primary">Login</button></RouterLink>
          </div>
        </div>
      </nav>

      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h6 class="text-white h6"><RouterLink :to="{name: 'home'}">HOME</RouterLink></h6>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
    
    </header>
      
    <section id="view">
      <RouterView />
    </section>

    <footer id="footer">
      <h1>This is our footer</h1>
    </footer>
  </div>
  
</template>

<style scoped>

#page {
  display: grid;
  grid-template-rows: 0.5fr 2fr 1fr;
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
  color: white;
  width: 100vw;
  height: 10vh;
  padding: 10px;

}

</style>
