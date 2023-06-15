import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "@/assets/plugins/fontawesome-free/css/all.min.css"
import "@/assets/dist/css/adminlte.min.css"
import "@/assets/plugins/bootstrap/js/bootstrap.bundle.min"
// import "@/assets/dist/js/adminlte"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')