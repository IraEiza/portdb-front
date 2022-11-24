<template>
    <div class="card">
        <form>
        <div class="mb-3">
            <label for="name" class="form-label"><strong>Name: </strong></label>
            <input type="text" class="form-control" id="name" placeholder="Introduce your name" v-model="ship.name">
        </div>
        <div class="mb-3">
            <label for="reg" class="form-label"><strong>Reg: </strong></label>
            <input type="text" class="form-control" id="reg" placeholder="Introduce your DNI or passport" v-model="ship.reg">
        </div>
        <SaveButton @save="saveData" />
        </form>
    </div>
</template>

<script setup>
import SaveButton from './SaveButton.vue';
</script>

<script>
    export default {
        props: {
            ship: Object
        },
        methods: {
            saveData() {
                this.$emit("save-ship", this.ship)
            }
        }
    }
</script>

<style scoped>
    .card {
        background-color: antiquewhite;
        padding: 15px;
    }

    .card div {
        display: flex;
        justify-content: space-between;

    }

    input {
        width: 250px;
        height: 30px;
    }

    .edit-button {
        background-color: orange;
        width: 50px;
        border-radius: 10%/10%;

    }
</style>