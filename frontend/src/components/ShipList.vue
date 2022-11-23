<template>
    <div>
        <ShipCard :ship="ship" v-if="!editShip" @change-ship="changeShip"/>
        <EditShipCard :ship="ship" v-if="editShip" @save-ship="saveData"/>
    </div>
</template>

<script setup>
import ShipCard from '../components/ShipsCard.vue';
import EditShipCard from '../components/EditShipsCard.vue';
</script>

<script>
    export default {
        data() {
            return {
                editShip: false
            }
        },
        props: {
            ship: Object
        },
        methods: {
            changeShip() {
                this.editShip = !this.editShip
            },
            saveData(updtdShip) {
                this.$emit("save-ship", updtdShip, this.ship._id)
                this.changeShip()
            }
        }
    }
</script>

<style scoped>
    
</style>