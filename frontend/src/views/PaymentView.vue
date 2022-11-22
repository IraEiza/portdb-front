<!-- <template>
        <div>
            <img src="../components/icons/paymentIcons.png" alt="">
            </div>
        <div id="form">
        <form>
        <div class="mb-3">
            <label for="titular" class="form-label">Name on card</label>
            <input type="text" class="form-control" id="titular" placeholder="Introduce titular name" v-model="newUser.name">
        </div>
        <div class="mb-3">
            <label for="creditcard" class="form-label">Creditcard number</label>
            <input type="text" class="form-control" id="creditcard" placeholder="Introduce your DNI or passport" v-model="newUser.dni">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Introduce your email" v-model="newUser.email">
        </div>
        <div class="mb-3">
            <label for="expire" class="form-label">Expiry date</label>
            <input type="password" class="form-control" id="expire" placeholder="Introduce your password" v-model="newUser.password">
        </div>
        <div class="mb-3">
            <label for="seccode" class="form-label">Security code</label>
            <input type="password" class="form-control" id="seccode" placeholder="Confirm your password" v-model="password2">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="signupUser">Pay</button>
        </form>
    </div>
</template>

<script setup>
    import api from '../services/api.js';
</script>

<script>
    export default {
        props: {
            paymentId: String
        },
        methods: {
            async signupUser() {
                if(this.newUser.password !== this.password2) {
                    alert('Password doesn\'t match')
                }
                else {
                    const response = await api.signup(this.newUser)
                    if (response === 'error') {
                        alert('Error creating account')
                    }
                    else {
                        this.$router.push({name: 'profile'})
                    }
                }                
            }
        }
    }
</script>

<style scoped>

    #form {
        width: 90vw;
        padding: 15px;
        margin: 0 auto;
        border: solid black 1px;
        border-radius: 10px/10px;
        background-color:rgb(247, 219, 171);
    }
    img {
        width: 100%;
    }

</style> -->