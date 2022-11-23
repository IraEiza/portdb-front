<template>
    <div id="profile">
        <h1>Profile data</h1>
        <ProfileCard :profile="profileData" :editProfile="editProfile" @change-profile="changeProfile" v-if="!editProfile"/>
        <EditProfileCard :profile="profileData" @save-data="saveProfile" v-if="editProfile"/>
        <div class="section">
            <span>My ships</span> <RouterLink :to="{name: 'useraddship'}" ><button class="bi bi-plus-lg add-button"></button></RouterLink> 
        </div>
        <ShipList v-for="(ship, idx) in ships" :key="idx" :ship="ship" @save-ship="saveShip"/>
        <h1>Payments</h1>
        <PaymentCard v-for="(payment, idx) in getPayments" :key="idx" :payment="payment" @updt-payments="updtPayments"/>

    </div>
</template>

<script setup>
    import API from '../services/profile.js';
    import ProfileCard from '../components/ProfileCard.vue';
    import EditProfileCard from '../components/EditProfileCard.vue';
    import ShipList from '../components/ShipList.vue';
    import PaymentCard from '../components/PaymentCard.vue';
    import { RouterLink } from 'vue-router';
    import profile from '../services/profile.js';
</script>

<script>
    export default {
        data() {
            return {
                editProfile: false,
                profileData: {
                    name: '',
                    dni: '',
                    email: ''
                },
                ships: [],
                bills: []
            }
        },
        computed: {
            getPayments() {
                return this.bills.filter(payment => payment.paid === false)
            }
        },
        methods: {
            changeProfile() {
                this.editProfile = !this.editProfile
            },
            async saveProfile(updtdProfile) {
                this.profileData = updtdProfile
                await profile.updateProfile(updtdProfile)
                this.changeProfile()
            },
            async saveShip(updtdShip, id) {
                let idx = this.ships.findIndex(ship => ship._id === id)
                this.ships[idx] = updtdShip
                await profile.updateShip(updtdShip, updtdShip._id)
            },
            updtPayments(removeId) {
                let updtdbills = this.bills.filter(bill => bill._id !== removeId)
                this.bills = updtdbills
            }
        },
        async created() {
            const profile = await API.getProfileInfo()
            this.profileData.name = profile.name
            this.profileData.dni = profile.dni
            this.profileData.email = profile.email
            this.ships = profile.ships
            const bills = await API.getOwnBills()
            this.bills = bills

        }
    }
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
        justify-content: space-between;
        align-items: center;
        font-size: 25px;
        font-weight:500;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .add-button {
        background-color:orange;
        border-radius: 10%/10%;
        width: 40px;
    }
</style>