import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import CadMed from '../views/CadMed'
import EditMed from '../views/EditMed'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout'
  },
  {
    path: '/medicos/editar/:id',
    name: 'medicos_editar',
    component: EditMed,
    props: true
  },
  {
    path: '/medicos/novo/',
    name: 'medicos_novo',
    component: CadMed
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/logout']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})

export default router
