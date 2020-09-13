import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { RouterViewTransition } from 'vue-router-view-transition'
import { waitForTransition } from 'vue-router-view-transition'

import Sneakers from './data/Sneakers.json'

Vue.component('RouterViewTransition', RouterViewTransition)

Vue.use(Router)

export default new Router({
  mode: 'hash',
  
  base: '/sneakers/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sneaker/:id',
      name: 'Sneaker',
      component: () =>
      import("./components/Sneaker.vue"),
      // props: true,
      beforeEnter: (to, from, next) => {
        function isValid (params) {
          return Sneakers.find(
            sneaker => sneaker.id === params
          );
        }
     
        if (!isValid(to.params.id)) {
          next({ name: '404' });
        }
        next();
      }
    },
    {
      path: '/about',
      name: "About",
      component: () =>
      import("./views/About.vue")
    },
    {
      path: '/404', component: () =>
      import("./views/404.vue"),
      name: '404'
    },  
    { 
      path: '*', 
      redirect: '/404' 
    }
  ],
  scrollBehavior: waitForTransition((to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      //return { x: 0, y: 0 }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  })
})
