import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

/* import './assets/main.css' */

const app = createApp(App)
const emitter = mitt()
app.config.globalProperties.emitter = emitter


app.use(router)

app.mount('#app')
