import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Otp from '../views/Otp.vue'
import Signup from '../views/Signup.vue'
import NoCode from '../views/NoCode.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/one-time-pin',
    name: 'Otp',
    component: Otp,
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/no-code',
    name: 'NoCode',
    component: NoCode,
  }
]

const router = new VueRouter({
  routes
})

export default router
