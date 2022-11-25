<template>
    <div class="card">
        <p v-if="payment.paid"><strong>Paid: </strong> YES</p>
        <p v-else><strong>Paid: </strong> NO</p>
        <p><strong>Quantity: </strong> {{payment.quantity}}</p>
        <p><strong>Dock: </strong> {{payment.dock.dock}}</p>
        <p><strong>Reservation date: </strong> {{formatResDate}}</p>
        <p><strong>Check-in: </strong> {{formatInDate}}</p>
        <p><strong>Check-out </strong> {{formatOutDate}}</p>
        <p v-if="payment.paid"><strong>Payment date:  </strong> {{formatPayDate}}</p>
        <RouterLink :to="{name: 'profile'}" v-if="!payment.paid"><button class="btn btn-primary pay-button" @click.prevent="payBill">Pay</button></RouterLink>
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
            },
            formatPayDate() {
                return new Date(this.payment.payDate).toLocaleDateString("es-ES")
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
        margin: 10px ;
        max-width: 300px;
        height: auto;

    }

    .pay-button {
        font-weight: 700;
        background-color: orange;
        height: 30px;
        padding: 0px;
        border: transparent;
        width: 100%;
    }
    



</style>