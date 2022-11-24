<script setup>
</script>

<template>
  <div class="header">
    <p>Welcome to </p> 
    <p id="port-utatis">PORT-Utatis!</p>
  </div>
  <div class="about-us">
    <div class="section">
      <h6><strong>ABOUT US</strong></h6>
      <p>Located in the center of Avenida Marítima, next to Las Alcaravaneras beach, PORT-Utatis has the best nautical and reparation services focused to ship care. </p>
      <p>Our pier also has the collaboration of large companies that offer their services to our clients.</p>
    </div>
    
  </div>

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

  .about-us { 
    width: fit-content;
    text-align: justify;
    margin: 0 auto;
  }

  .header {
    background-image: url('../components/icons/cabeceraHome2.png');
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 30px;
    color: rgb(255, 192, 20);

    text-align: center;
    -webkit-text-stroke: 1px rgb(0, 0, 0);
    text-shadow:black 2px 2px;
  }
  #port-utatis {
    font-size: 50px;
    -webkit-text-stroke: 1px rgb(0, 0, 0);
    text-shadow:rgb(0, 0, 0) 5px 5px;

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
  .section {
    padding: 10px;
  }

</style>
