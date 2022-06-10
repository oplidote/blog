import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './style/style.scss'
import VueScrollProgress from 'vue-scroll-progress'
createApp(App).use(router).use(store).mount('#app')