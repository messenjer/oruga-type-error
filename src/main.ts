import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga-next'

const app = createApp(App)

app.use(createPinia())
app.use(Oruga)

app.mount('#app')
