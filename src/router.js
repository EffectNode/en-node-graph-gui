import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'iGraph',
      component: () => import(/* webpackChunkName: "editor" */ './views/iGraph.vue')
    },
    {
      path: '/editro/:graphID',
      name: 'iGraph',
      component: () => import(/* webpackChunkName: "editor" */ './views/iGraph.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
