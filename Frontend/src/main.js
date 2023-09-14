import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from "@vueuse/head"
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(createPinia())

app.mount('#app')
