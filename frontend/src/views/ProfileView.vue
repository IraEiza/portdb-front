<template>
    <div>
        <h1>Profile data</h1> {{profileData}}
        
    </div>
</template>

<script setup>
    import profile from '../services/profile.js';
</script>

<script>
    export default {
        data() {
            return {
                profileData: {}
            }
        },
        async beforeCreate() {
            const result = await profile.getProfile()
            console.log(result)
            this.profileData = result
        }
    }
</script>

<style scoped>

</style>