import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/BookSearch.vue'
import Login from '@/views/Login.vue'
import JoinUs from '@/views/joinUs.vue'
import About from '@/views/AboutUs.vue'
import BookDetail from '@/views/BookDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/joinUs',
    name: 'JoinUs',
    component: JoinUs
  },
  {
    path:'/bookDetail/:id',
    name: 'BookDetail',
    component: BookDetail,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
