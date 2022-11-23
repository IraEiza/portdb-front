<template>
  <div class="search">
    <input type="date" name="" id="" v-model="resData.inDate">
    <input type="date" name="" id="" v-model="resData.outDate">
    <button @click.prevent="getAvailableDocks">Search</button>
    <div id="ship" v-if="chooseShip">
      <label for="shipname">Ship's name: </label> <br/>
      <input type="text" name="" id="shipname" placeholder=" Introduce ship's name" v-model="resData.ship">
    </div>
  </div>
  <DockCardVue v-for="dock in availableDocks" :dock="dock" @make-reservation="makeReservation"/>
</template>


<script setup>
import dockAPI from "../services/dock.js";
import DockCardVue from "../components/DockCard.vue";
</script>

<script>
  export default {
    data() {
      return {
        chooseShip: false,
        availableDocks: [],
        resData: {
          inDate: '',
          outDate: '',
          ship: ''
        }
      }
    },
    methods: {
      async getAvailableDocks() {
        const response = await dockAPI.getAvailableDocks({"inDate": this.resData.inDate, "outDate": this.resData.outDate})
        this.availableDocks = response
        this.chooseShip = !this.chooseShip
      },
      async makeReservation(dockNumber) {
        const response = await dockAPI.reserveDock({
          "dock": dockNumber,
          "ship": this.resData.ship,
          "inDate": this.resData.inDate,
          "outDate": this.resData.inDate
        })
        this.availableDocks = this.availableDocks.filter(dock => dock.dock !== dockNumber)
        this.resData.ship = ''
      }
    }
  }
</script>

<style scoped>
  .search {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin-bottom: 5px;
  }
</style>