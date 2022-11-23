<script setup>
</script>

<template>
  <div class="header-img">PORT-Utatis</div>
  <main class="main">
    <div>
      <h5>Wellcome to PORT-Utatis!</h5>
      <h6>ABOUT US</h6>
      <p>Located in the center of Avenida Marítima, next to Las Alcaravaneras beach, PORT-Utatis has the best nautical and reparation services focused to ship care. </p>
      <p>Our pier also has the collaboration of large companies that offer their services to our clients.</p>
    </div>
    
  </main>

  <div class="img">
    <img src="../components/icons/atención24h.png" alt="">
    <p>Customer services 24/7</p>
  </div>
  <div class="img">
    <img src="../components/icons/sedeElectrónica.png" alt="">
    <p>Online procedures</p>
  </div>
  <div class="img">
    <img src="../components/icons/onlinePay.png" alt="">
    <p>Online pay available</p>
  </div>
  <div class="img">
    <img src="../components/icons/collaboration.png" alt="">
    <p>Partners</p>
  </div>

  
</template>

<style scoped>

  .main {
    padding: 10px;
    height: 100;
    text-align: justify;
  }

  .main h5 {
    color: rgb(51, 113, 247);
    text-align: center;
    margin-top: 25px;
    margin-bottom: 30px;
  }
  .img {
    text-align: center;
    width: 200px;
    height: 200px;
    margin: 0px auto;
  }
  .img img {
    width: 150px;
    height: 150px;
  }

  .header-img {
    background-image: url('../components/icons/cabeceraHome.jpg');
    background-size: cover;
    background-position: center;
    height: 100px;
    width: 100vw;
  }

</style>
