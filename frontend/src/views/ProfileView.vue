<template>
    <div id="profile">
        <h1>Profile data</h1>
        <ProfileCard :profile="profileData"/>
    </div>
</template>

<script setup>
    import API from '../services/api.js';
    import ProfileCard from '../components/ProfileCard.vue';
</script>

<script>
    export default {
        data() {
            return {
                profileData: {
                    name: '',
                    dni: '',
                    email: ''
                }
            }
        },
        async created() {
            const result = await API.getProfileInfo()
            /* console.log(result) */
            this.profileData.name = result.name
            this.profileData.dni = result.dni
            this.profileData.email = result.email
        }
    }
</script>

<style scoped>
    #profile {
        margin: 5px;
    }
</style>