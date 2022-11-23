<template>
  <div class="search">
    <input type="date" name="" id="" v-model="inDate">
    <input type="date" name="" id="" v-model="outDate">
    <button @click.prevent="getAvailableDocks">Search</button>
  </div>
  <DockCardVue v-for="dock in availableDocks" :dock="dock" />
</template>


<script setup>
import dockAPI from "../services/dock.js";
import DockCardVue from "../components/DockCard.vue";
</script>

<script>
  export default {
    data() {
      return {
        availableDocks: [],
        inDate: '',
        outDate: ''
      }
    },
    methods: {
      async getAvailableDocks() {
        const response = await dockAPI.getAvailableDocks(this.inDate, this.outDate)
        console.log(response)
        this.availableDocks = response
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