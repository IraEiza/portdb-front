<template>
    <div class="card">
        <p>name: {{ship.name}}</p>
        <p>reg: {{ship.reg}}</p>
        <button class="edit-button">Edit</button>
    </div>
</template>

<script setup>

</script>

<script>
    export default {
        props: {
            ship: Object
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