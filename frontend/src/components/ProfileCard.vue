<template>
    <div class="card">
        <p><strong>Name:</strong> {{profile.name}}</p>
        <p><strong>DNI:</strong> {{profile.dni}}</p>
        <p><strong>Email:</strong> {{profile.email}}</p>
        <EditButton @edit="changeProfile"/>
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
    .card {
        background-color: antiquewhite;
        padding: 15px;
    }
</style>