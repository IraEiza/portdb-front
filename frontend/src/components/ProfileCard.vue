<template>
    <div class="card">
        <p><strong>Name: </strong> {{ profile.name }}</p>
        <p><strong>DNI: </strong> {{ profile.dni }}</p>
        <p><strong>Email: </strong> {{ profile.email }}</p>
        <EditButton @edit="changeProfile" />
    </div>
</template>

<script setup>
import EditButton from './EditButton.vue';
</script>

<script>
export default {
    props: {
        profile: Object,
        editProfile: Boolean
    },
    methods: {
        changeProfile() {
            this.$emit("change-profile")
        }
    }
}
</script>

<style scoped>
input {
    width: 240px;
    height: 30px;
}

.card {
    background-color: antiquewhite;
    padding: 10px;
    margin: 10px auto;
    width: 320px;
    height: auto;
}
</style>