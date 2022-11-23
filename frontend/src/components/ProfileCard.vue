<template>
    <div class="card">
        <p>name: {{profile.name}}</p>
        <p>DNI: {{profile.dni}}</p>
        <p>email: {{profile.email}}</p>
        <button class="edit-button" @click="changeProfile">Edit</button>
    </div>
</template>

<script setup>

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

    .edit-button {
        background-color: orange;
        width: 50px;
        border-radius: 10%/10%;

    }

</style>