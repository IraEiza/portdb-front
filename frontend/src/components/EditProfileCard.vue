<template>
    <div class="card">
        <form>
        <div class="mb-3">
            <label for="name" class="form-label">name:</label>
            <input type="text" class="form-control" id="name" placeholder="Introduce your name" v-model="profile.name">
        </div>
        <div class="mb-3">
            <label for="dni" class="form-label">DNI:</label>
            <input type="text" class="form-control" id="dni" placeholder="Introduce your DNI or passport" v-model="profile.dni">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">email:</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Introduce your email" v-model="profile.email">
        </div>
        <button type="submit" class="edit-button" @click.prevent="saveData">Save</button>
        </form>
    </div>
</template>

<script setup>

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