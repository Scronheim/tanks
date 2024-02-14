import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import axios from 'axios'

import App from './App.vue'

const app = createApp(App)

registerPlugins(app)

axios.defaults.baseURL = 'http://188.225.31.66:3000/api'

app.mount('#app')
