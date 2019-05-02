import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import Portfolio from './Portfolio.vue'
import Blog from './Blog.vue'
import Contact from './Contact.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Portfolio
    },
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')