import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import Framework7 Core
import Framework7 from 'framework7/lite-bundle';

// Import Framework7 Vue
// @ts-expect-error registerComponents is missing from the typescript definition
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle'

import App from './App.vue'
import router from './router'

// Init plugin
Framework7.use(Framework7Vue)

const app = createApp(App)

app.use(createPinia())
app.use(router)

registerComponents(app);

app.mount('#app')
