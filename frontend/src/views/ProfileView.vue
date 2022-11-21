<template>
    <div>
        <h1>Profile data</h1> {{profileData}}
        
    </div>
</template>

<script setup>
    import API from '../services/api.js';
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
        mounted: async() => {
            const result = await API.getProfileInfo()
            console.log(result)
            this.profileData.name = result.name
        }
    }
</script>

<style scoped>

</style>