<template>
    <h1>Add new ship</h1>
    <div id="form">
        <form>
        <div class="mb-3">
            <label for="name" class="form-label">Ship name</label>
            <input type="text" class="form-control" id="name" placeholder="Introduce your ship's name" v-model="newShip.name">
        </div>
        <div class="mb-3">
            <label for="reg" class="form-label">Ship registration</label>
            <input type="text" class="form-control" id="reg" placeholder="Introduce your ship's registration" v-model="newShip.reg">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="addNewShip">Add</button>
        </form>
    </div>
</template>

<script setup>
    import profile from '../services/profile.js';
</script>

<script>
    export default {
        data() {
            return {
                newShip: {
                    name: '',
                    reg: ''
                }
            }
        },
        methods: {
            async addNewShip() {
                const response = await profile.addOwnShip(this.newShip)
                if (response === 'error') {
                    alert('Error creating ship')
                }
                else {
                    this.$router.push({name: 'profile'})
                }             
            }
        }
    }
</script>

<style scoped>

    #form {
        width: 90vw;
        padding: 15px;
        margin: 20px auto;
        border: solid black 1px;
        border-radius: 10px/10px;
        background-color:rgb(247, 219, 171);
    }
    h1 {
        margin: 20px;
    }

</style>