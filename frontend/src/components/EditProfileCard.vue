<template>
    <div class="card">
        <form>
        <div class="mb-3">
            <label for="name" class="form-label"><strong>Name: </strong></label>
            <input type="text" class="form-control" id="name" placeholder="Introduce your name" v-model="profile.name">
        </div>
        <div class="mb-3">
            <label for="dni" class="form-label"><strong>DNI : </strong></label>
            <input type="text" class="form-control" id="dni" placeholder="Introduce your DNI or passport" v-model="profile.dni">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label"><strong>Email: </strong></label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Introduce your email" v-model="profile.email">
        </div>
        </form>
        <SaveButton @save="saveData" />
    </div>
</template>

<script setup>
import SaveButton from './SaveButton.vue';
</script>

<script>
    export default {
        props: {
            profile: Object
        },
        methods: {
            saveData() {
                this.$emit("save-data", this.profile)
            }
        }
    }
</script>

<style scoped>
    .card {
        background-color: antiquewhite;
        padding: 15px;
        margin: 10px auto;
        width: 400px;
        height: auto;
    }

    .card div {
        display: flex;
        justify-content: space-between;

    }

    input {
        width: 250px;
        height: 30px;
    }

    @media (max-width: 719px){
        .card {
        background-color: antiquewhite;
        padding: 10px;
        margin: 10px ;
        width: 320px;
        height: auto;
    }

    }
</style>