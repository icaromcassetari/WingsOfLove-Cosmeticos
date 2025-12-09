import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createBootstrap } from 'bootstrap-vue-next'
import VueAwesomePaginate from 'vue-awesome-paginate'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// import the necessary css file

import 'vue-awesome-paginate/dist/style.css'
import '@/assets/animationSobreNos.scss'

const app = createApp(App)
app.use(VueAwesomePaginate)
app.use(createBootstrap())
app.mount('#app')
