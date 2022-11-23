<template>
    <div class="card">
        <p>paid: {{payment.paid}}</p>
        <p>quantity: {{payment.quantity}}</p>
        <p>dock: {{payment.dock.dock}}</p>
        <p>resDate: {{formatResDate}}</p>
        <p>inDate: {{formatInDate}}</p>
        <p>outDate: {{formatOutDate}}</p>
        <RouterLink :to="{name: 'profile'}"><button class="pay-button" @click.prevent="payBill">Pay</button></RouterLink>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import profile from '../services/profile';
</script>

<script>
    export default {
        props: {
            payment: Object
        },
        computed: {
            formatResDate() {
                return new Date(this.payment.resDate).toLocaleDateString("es-ES")
            },
            formatInDate() {
                return new Date(this.payment.inDate).toLocaleDateString("es-ES")
            },
            formatOutDate() {
                return new Date(this.payment.outDate).toLocaleDateString("es-ES")
            }
        },
        methods: {
            async payBill() {
                const response = await profile.payBill({"paymentId": this.payment._id})
                this.$emit('updt-payments', this.payment._id)
                if (response === 'error') {
                    alert("Your payment didn't go through")
                }
                else {
                    this.$router.push({name: 'profile'})
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        background-color: antiquewhite;
        padding: 15px;
    }

    .pay-button {
        background-color: rgb(145, 250, 64);
        width: 50px;
    }

</style>