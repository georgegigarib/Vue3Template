import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugins } from '@/infrastructure/plugins/allPlugins'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

plugins.forEach((plugin) => app.use(plugin))

app.mount('#app')
