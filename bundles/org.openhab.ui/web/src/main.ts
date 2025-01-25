import { createApp } from 'vue'

import App from './App.vue'

import plugins from './plugins'

import routes from '~pages'

import '@/sass/main.scss'

const app = createApp(App)

app.use(plugins)

app.mount('#app')
