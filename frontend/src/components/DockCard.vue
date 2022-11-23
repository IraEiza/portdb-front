<template>
    <div class="card">
        <span>dock: {{dock.dock}}</span>
        <button class="reserve-button">Reserve</button>
    </div>
</template>

<script setup>

</script>

<script>
    export default {
        props: {
            dock: Object
        }
    }
</script>

<style scoped>
    .card {
        background-color: antiquewhite;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .reserve-button {
        background-color: orange;
        width: 70px;
        border-radius: 10%/10%;
    }

</style>