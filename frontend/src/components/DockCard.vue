<template>
    <div class="card">
        <span><strong>dock {{dock.dock}}</strong></span>
        <button class="btn btn-primary reserve-button" @click.prevent="makeReservation" v-if="store.isLoggedIn">Reserve</button>
    </div>
</template>

<script setup>
import { useAuthStore } from '../stores/store'
</script>

<script>
    export default {
        data() {
            return {
                store: useAuthStore()
            }
        },
        props: {
            dock: Object
        },
        methods: {
            async makeReservation() {
                this.$emit("make-reservation", this.dock.dock)
            }
        }
    }
</script>

<style scoped>
    .card {
        background-color: antiquewhite;
        width: 90vw;
        max-width: 300px;
        margin: 5px auto;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .reserve-button {
        color: white;
        margin-top: 5px;
        font-weight: 700;
        background-color: orange;
        height: 30px;
        padding: 0px;
        border: transparent;
        width: 100px
    }

    @media (min-width: 720px) {

        .card {
            width: 40vw;
        }
    }

</style>