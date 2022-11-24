<template>
  <div class="row g-0 bg-light position-relative hotelerio">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/hotel.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Don't you know where to stay tonight?</h5>
    <a href="https://hotelerioapp.netlify.app/" target="_blank" class="stretched-link">HOTELERIO!</a>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
  </div>
</div>

<div class="row g-0 bg-light position-relative repair">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/repair.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Has your mobile been broken?</h5>
    <a href="#" target="_blank" class="stretched-link">JVJ REPAIR!</a>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
  </div>
</div>

<div class="row g-0 bg-light position-relative animals">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/animals.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Do you feel alone?</h5>
    <a href="https://dyreven.netlify.app/" target="_blank" class="stretched-link">DYREVERN!</a>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
  </div>
</div>

<div class="row g-0 bg-light position-relative cook">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/recipes.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Are you hungry?</h5>
    <a href="#" target="_blank" class="stretched-link">COOKING NOW!</a>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
  </div>
</div>

<div class="row g-0 bg-light position-relative law">
  <div class="col-md-6 mb-md-0 p-md-4 img">
    <img src="../components/icons/law.png" class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Have you damaged the neighbor's boat?</h5>
    <a href="#" target="_blank" class="stretched-link">LAW FIRM!</a>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
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
  width: 200px;
}

@media (max-width: 719px) {
	.img {
    display: none;
  }
  .hotelerio, .repair, .animals, .cook, .law {
  display: flex;
  justify-content: center;
  margin: 2px;
  border: 1px solid black
}

}

</style>