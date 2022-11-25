<template>
  <div class="search">
    <div class="pos">
      <label for="in-date"><strong>From: </strong> </label>
      <input type="date" name="" id="in-date" v-model="resData.inDate" />
      <label for="out-date"><strong>To: </strong></label>
      <input type="date" name="" id="out-date" v-model="resData.outDate" />
      <button class="btn btn-primary search-btn" @click.prevent="getAvailableDocks">
        Search
      </button>
    </div>

    <div id="ship" v-if="chooseShip & store.isLoggedIn">
      <label for="shipname"><strong>Ship's name:</strong> </label>
      <select class="form-select choose" aria-label="Default select example" v-model="resData.ship"
        placeholder="Choose a ship">
        <option value="" hidden selected>Choose a ship</option>
        <option v-for="(ship, idx) in shipList" :key="idx" :value="ship.name">
          {{ ship.name }}
        </option>
      </select>
    </div>
  </div>
  <div id="docks">
    <DockCardVue v-for="dock in availableDocks" :dock="dock" @make-reservation="makeReservation" />
  </div>
</template>

<script setup>
import dockAPI from "../services/dock.js";
import DockCardVue from "../components/DockCard.vue";
import profile from "../services/profile.js";
import { useAuthStore } from "../stores/store";
</script>

<script>
export default {
  data() {
    return {
      store: useAuthStore(),
      chooseShip: false,
      availableDocks: [],
      resData: {
        inDate: "",
        outDate: "",
        ship: "",
      },
      shipList: [],
    };
  },
  methods: {
    async getAvailableDocks() {
      if (!this.resData.inDate || !this.resData.outDate) {
        alert("Please, choose a check-in and check-out date");
      } else {
        const response = await dockAPI.getAvailableDocks({
          inDate: this.resData.inDate,
          outDate: this.resData.outDate,
        });
        this.availableDocks = response;
        this.chooseShip = true;
      }
    },
    async makeReservation(dockNumber) {
      const response = await dockAPI.reserveDock({
        dock: dockNumber,
        ship: this.resData.ship,
        inDate: this.resData.inDate,
        outDate: this.resData.outDate,
      });
      this.availableDocks = this.availableDocks.filter(
        (dock) => dock.dock !== dockNumber
      );
      this.resData.ship = "";
    },
  },
  async created() {
    if (this.store.isLoggedIn) {
      const profileData = await profile.getProfileInfo();
      this.shipList = profileData.ships;
    }
  },
};
</script>

<style scoped>
input {
  border: black solid 1px;
  height: 30px;
}

.search-btn {
  /*  margin-top: 5px; */
  font-weight: 700;
  background-color: orange;
  height: 30px;
  padding: 0px;
  border: transparent;
  width: 100%;
}
.choose option {
  width: 100vw;
}


@media (max-width: 499px) {

  .search {
    display: grid;
    grid-template-rows: 1fr;
    margin: 5px;
    padding: 5px;
  }
  .search-btn {
    margin-top: 5px;
    width: 99%;
  }

  .search input,
  label {
    margin: 0 auto;
    width: 99%;
  }
}

@media (min-width: 500px) {

  .search {
    display: grid;
    grid-template-rows: 1fr;
    margin-bottom: 5px;
    padding: 5px;
  }

  .search-btn {
    width: 150px;
  }

  input,
  button {
    margin: 15px;
  }

  .pos {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #ship {
    width: 650px;
    display: flex;
    justify-content: center;
    margin: 20px auto;
  }

  .choose {
    max-width: 400px;
    height: 40px;
    margin-left: 15px;
  }
  #docks {
    display: flex;
    flex-wrap: wrap;

  }
}
</style>
