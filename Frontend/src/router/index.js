import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FilmDetail from '../views/FilmDetail.vue'
import SignInForm from '../views/SignInForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/film/:idMovie',
      name: 'filmDetail',
      component: FilmDetail
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignInForm
    }
  ]
})

export default router
