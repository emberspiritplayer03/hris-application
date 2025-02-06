import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from './components/UserLogin.vue'
import UserRegister from './components/UserRegister.vue'

const routes = [
  { path: '/login', component: UserLogin },
  { path: '/register', component: UserRegister }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
