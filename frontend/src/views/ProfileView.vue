<template>
  <div id="profile">
    <div class="accordion" id="accordionExample">
      <!-- desplegable profile -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h2>Profile data</h2>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ProfileCard
              :profile="profileData"
              :editProfile="editProfile"
              @change-profile="changeProfile"
              v-if="!editProfile"
            />
            <EditProfileCard
              :profile="profileData"
              @save-data="saveProfile"
              v-if="editProfile"
            />
          </div>
        </div>
      </div>
      <!-- desplegable ships -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <div>
              <h2>My ships</h2>
            </div>
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="section">
              <p>
                <strong>Add ship </strong>
                <RouterLink :to="{ name: 'useraddship' }"
                  ><button class="bi bi-plus-lg add-button"></button
                ></RouterLink>
              </p>
            </div>

            <ShipList
              v-for="(ship, idx) in ships"
              :key="idx"
              :ship="ship"
              @save-ship="saveShip"
            />
          </div>
        </div>
      </div>

      <!-- desplegable pending to pay -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            <div>
              <h2>Pending to pay</h2>
            </div>
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body card-display">
            <PaymentCard
              v-for="(payment, idx) in getPayments"
              :key="idx"
              :payment="payment"
              @updt-payments="updtPayments"
            />
          </div>
        </div>
      </div>
      <!-- desplegable payments -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <h2>All reservations</h2>
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body card-display">
            <PaymentCard
              v-for="(bill, idx) in bills"
              :key="idx"
              :payment="bill"
              @updt-payments="updtPayments"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import API from "../services/profile.js";
import ProfileCard from "../components/ProfileCard.vue";
import EditProfileCard from "../components/EditProfileCard.vue";
import ShipList from "../components/ShipList.vue";
import PaymentCard from "../components/PaymentCard.vue";
import { RouterLink } from "vue-router";
import profile from "../services/profile.js";
</script>

<script>
export default {
  data() {
    return {
      editProfile: false,
      profileData: {
        name: "",
        dni: "",
        email: "",
      },
      ships: [],
      bills: [],
    };
  },
  computed: {
    getPayments() {
      return this.bills.filter((payment) => payment.paid === false);
    },
  },
  methods: {
    changeProfile() {
      this.editProfile = !this.editProfile;
    },
    async saveProfile(updtdProfile) {
      this.profileData = updtdProfile;
      await profile.updateProfile(updtdProfile);
      this.changeProfile();
    },
    async saveShip(updtdShip, id) {
      let idx = this.ships.findIndex((ship) => ship._id === id);
      this.ships[idx] = updtdShip;
      await profile.updateShip(updtdShip, updtdShip._id);
    },
    updtPayments(removeId) {
      let updtdbills = this.bills.filter((bill) => bill._id !== removeId);
      this.bills = updtdbills;
    },
  },
  async created() {
    const profile = await API.getProfileInfo();
    this.profileData.name = profile.name;
    this.profileData.dni = profile.dni;
    this.profileData.email = profile.email;
    this.ships = profile.ships;
    const bills = await API.getOwnBills();
    this.bills = bills;
  },
};
</script>

<style scoped>
#profile {
  margin: 5px;
}
h1 {
  margin-top: 10px;
}
.section {
  display: flex;
  justify-content: flex-end;
  font-size: calc(16px + 1vw);
  margin-top: 10px;
  margin-bottom: 5px;
}

.add-button {
  background-color: orange;
  border-radius: 10%/10%;
  width: 40px;
  border: transparent;
}

@media (max-width: 719px) {
	.card-display {
    display: flex;
    flex-direction: column;
  }

}

@media (min-width: 720px) {
  .card-display {
    display: flex;
    flex-wrap: wrap;
		  }
}
</style>
