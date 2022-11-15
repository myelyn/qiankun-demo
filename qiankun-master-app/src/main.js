import { createApp } from 'vue'
import './style.css'
import router from './router'
import store from './store'
import App from './App.vue'
import start from '@/micros'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

start({ sandbox: { experimentalStyleIsolation: true } })