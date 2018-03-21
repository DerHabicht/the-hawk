import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Bio from '@/components/Bio'
import Coding from '@/components/Coding'
import Writing from '@/components/Writing'
import AstroHome from '@/components/astro/AstroHome'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bio',
      name: 'bio',
      component: Bio
    },
    {
      path: '/coding',
      name: 'coding',
      component: Coding
    },
    {
      path: '/writing',
      name: 'writing',
      component: Writing
    },
    {
      path: '/astro/',
      name: 'astro-home',
      component: AstroHome
    }
  ]
})
