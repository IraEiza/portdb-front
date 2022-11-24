<script setup>
</script>

<template>

  <div class="header">
    <p>Welcome to </p>
    <p id="port-utatis">PORT-Utatis!</p>
  </div>
  <div class="about-us">
    <h6><strong>ABOUT US</strong></h6>
    <p>Located in the center of Avenida Marítima, next to Las Alcaravaneras beach, PORT-Utatis has the best nautical and
      reparation services focused to ship care. </p>
    <p>Our pier also has the collaboration of large companies that offer their services to our clients.</p>
  </div>

  <div id="icons">
    <div>
      <img src="../components/icons/atención24h.png" alt="">
      <p>Customer services 24/7</p>
    </div>
    <div>
      <img src="../components/icons/sedeElectrónica.png" alt="">
      <p>Online procedures</p>
    </div>
    <div>
      <img src="../components/icons/onlinePay.png" alt="">
      <p>Online pay available</p>
    </div>
    <div>
      <img src="../components/icons/collaboration.png" alt="">
      <p>Partners</p>
    </div>
  </div>




</template>

<style scoped>
.about-us {
  text-align: justify;
  margin: 0 auto;
  padding: 25px;
}
.about-us h6 {
  color: rgb(19, 45, 102);
  background: rgb(231,180,46);
  background: linear-gradient(90deg, rgba(239, 196, 87, 0.863) 28%, rgba(236,231,165,1) 92%);
  padding: 2px;
  border-radius: 5px/5px;
  text-align: center;
}
.header {
  background-image: url('../components/icons/cabeceraHome4.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 30px;
  color: rgb(255, 255, 255);

  text-align: center;
  text-shadow: rgb(0, 0, 0) 4px 4px;
  -webkit-text-stroke: 1px rgb(0, 0, 0);
}

#port-utatis {
  font-size: 50px;
  -webkit-text-stroke: 1px rgb(0, 0, 0);
  text-shadow: rgb(0, 0, 0) 5px 5px;

}

#icons {
  text-align: center;

}

#icons img {
  margin: 15px 0px;
  width: 150px;
  height: 150px;
}
</style>
