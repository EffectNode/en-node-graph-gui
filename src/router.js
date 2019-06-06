import Vue from 'vue'
import Router from 'vue-router'
import * as API from './api/api.js'
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
      path: '/myhome',
      name: 'My Home',
      beforeEnter: (to, from, next) => {
        if (API.check()) {
          API.getMyself().then(() => {
            next()
          }, () => {
            next('/login')
          })
        } else {
          next('/login')
        }
      },
      component: () => import(/* webpackChunkName: "landing" */ './views/MyHome.vue')
    },
    {
      path: '/login',
      name: 'Login',
      beforeEnter: async (to, from, next) => {
        if (API.check()) {
          next('/myhome')
        } else {
          next()
        }
      },
      component: () => import(/* webpackChunkName: "landing" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      beforeEnter: async (to, from, next) => {
        if (API.check()) {
          next('/myhome')
        } else {
          next()
        }
      },
      component: () => import(/* webpackChunkName: "landing" */ './views/Register.vue')
    },
    {
      path: '/embed/:graphID',
      name: 'embed',
      // beforeEnter: (to, from, next) => {
      //   if (API.check()) {
      //     API.getMyself().then(() => {
      //       next()
      //     }, () => {
      //       next(`/login?redirect=${to.path}`)
      //     })
      //   } else {
      //     next(`/login?redirect=${to.path}`)
      //   }
      // },
      component: () => import(/* webpackChunkName: "editor" */ './views/Embed.vue')
    },
    {
      path: '/iGraph-Editor/:graphID',
      name: 'iGraphEditor',
      // beforeEnter: (to, from, next) => {
      //   if (API.check()) {
      //     API.getMyself().then(() => {
      //       next()
      //     }, () => {
      //       next(`/login?redirect=${to.path}`)
      //     })
      //   } else {
      //     next(`/login?redirect=${to.path}`)
      //   }
      // },
      component: () => import(/* webpackChunkName: "editor" */ './views/iGraphEditor.vue')
    },
    {
      path: '/iGraph-Series/:graphID',
      name: 'iGraph Series',
      beforeEnter: (to, from, next) => {
        if (API.check()) {
          API.getMyself().then(() => {
            next()
          }, () => {
            next('/login')
          })
        } else {
          next('/login')
        }
      },
      component: () => import(/* webpackChunkName: "editor" */ './views/iGraphSeries.vue')
    }
  ]
})
