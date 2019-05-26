import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: () => import(/* webpackChunkName: "landing" */ './views/Landing.vue')
    },
    {
      path: '/demo',
      name: 'iGraphDemo',
      component: () => import(/* webpackChunkName: "demo" */ './views/iGraphDemo.vue')
    },
    {
      path: '/editor/:graphID',
      name: 'iGraphEditor',
      component: () => import(/* webpackChunkName: "editor" */ './views/iGraphEditor.vue')
    }
  ]
})
