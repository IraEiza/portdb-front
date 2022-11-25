<template>
  <div class="row g-0 bg-light position-relative hotelerio">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/hotel.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Don't you know where to stay tonight?</h5>
    <a href="https://hotelerioapp.netlify.app/" target="_blank" class="stretched-link">HOTELERIO!</a>
    <p>Enjoy a restful sleep in the best hotel in Las Palmas. Hotelerio offers 3 types of rooms according to the needs of the client and allows access to pets. Take advantage of the benefits for being customers of the pier!</p>
  </div>
</div>

<div class="row g-0 bg-light position-relative repair">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/repair.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Has your phone been broken?</h5>
    <a href="#" target="_blank" class="stretched-link">JVJ REPAIR!</a>
    <p>The JVJ Reparations team are experts in the repair of all types of electronic devices. If during your trip any of them has suffered any damage, do not hesitate to contact them. They will leave them like new!</p>
  </div>
</div>

<div class="row g-0 bg-light position-relative animals">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/animals.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Do you feel alone?</h5>
    <a href="https://dyreven.netlify.app/" target="_blank" class="stretched-link">DYREVERN!</a>
    <p>If during the trip you have thought of adopting a pet to keep you company, you have found the right place. DYREVEN will take care of finding the pet that best suits you to accompany you throughout your journey.</p>
  </div>
</div>

<div class="row g-0 bg-light position-relative cook">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/recipes.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Are you hungry?</h5>
    <a href="#" target="_blank" class="stretched-link">COOKING NOW!</a>
    <p>If you are vegan, celiac, lactose intolerant or don't know what to cook, this app is your salvation. COOKING NOW has thousands of recipes to suit different tastes and diets. It also offers the possibility of filtering recipes by ingredients, so you won't have to worry about stock!</p>
  </div>
</div>

<div class="row g-0 bg-light position-relative law">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/law.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Have you damaged your neighbor's boat?</h5>
    <a href="https://law-firm2.netlify.app/" target="_blank" class="stretched-link">LAWFIRM!</a>
    <p>We all make mistakes and accidents happen often. If the situation has gotten out of hand and there is no way to resolve the conflict, LAWFIRM will take care of managing it for you.</p>
  </div>
</div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.stretched-link {
  text-decoration: none;
  font-size: calc(20px + 1vw)
}

.hotelerio, .repair, .animals, .cook, .law {
  display: flex;
  justify-content: center;
  margin: 10px auto;
  text-align: justify;
}

.img {
  margin-top: 15px;
  width: 200px;
}

@media (max-width: 719px) {
	.img {
    width: 100px;
  }
  .hotelerio, .repair, .animals, .cook, .law {
  display: flex;
  justify-content: center;
  margin: 2px;
  border: 1px solid black
}

}

</style>