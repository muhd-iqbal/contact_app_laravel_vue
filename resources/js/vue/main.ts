import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "@/assets/plugins/fontawesome-free/css/all.min.css"

import App from './App.vue';
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {fas,faR} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas,faR)

const app = createApp(App);


app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


// createApp(App)/


