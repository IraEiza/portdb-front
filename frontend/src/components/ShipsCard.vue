<template>
    <div class="card">
        <p><strong>Name:</strong> {{ ship.name }}</p>
        <p><strong>Reg: </strong> {{ ship.reg }}</p>
        <EditButton @edit="changeShip" />
    </div>
</template>

<script setup>
import EditButton from './EditButton.vue';
</script>

<script>
export default {
    props: {
        ship: Object
    },
    methods: {
        changeShip() {
            this.$emit("change-ship")
        }
    }
}
</script>

<style scoped>
.card {
    background-color: antiquewhite;
    padding: 15px;
    margin: 10px;
    max-width: 300px;
    height: auto;
}

.edit-button {
    background-color: orange;
    width: 50px;
    border-radius: 10%/10%;
}

@media (min-width: 720px) {
    .card {
        background-color: antiquewhite;
        padding: 15px;
        margin: 10px;
        width: 500px;
        height: auto;
    }
}
</style>