<template>
    <div class="card">
        <p>name: {{profile.name}}</p>
        <p>dni: {{profile.dni}}</p>
        <p>email: {{profile.email}}</p>
        <button class="edit-button">Edit</button>
    </div>
</template>

<script setup>

</script>

<script>
    export default {
        props: {
            profile: Object
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
    }

</style>