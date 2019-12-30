import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: "home",
    component: Home,
    children: [{
      path: '/',
      name: "reform-opening",
      component: Index
    }, ]
  },

]

const router = new VueRouter({
  routes
})

export default router