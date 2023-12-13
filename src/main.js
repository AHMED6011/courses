import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$toUp = () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
}

app.use(router)

app.mount('#app')
