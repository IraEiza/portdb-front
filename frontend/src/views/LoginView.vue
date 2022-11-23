<template>
    <div id="form">
        <form>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="user.email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="user.password">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="loginUser">Submit</button>
        </form>
    </div>
</template>

<script setup>
    import api from '../services/api.js';
</script>

<script>
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async loginUser() {
                const response = await api.login(this.user)
                    if (response.data.error) {
                        alert(response.data.error)
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

</style>