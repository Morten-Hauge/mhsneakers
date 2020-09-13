import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueHeadful from 'vue-headful'
import VueLazyload from 'vue-lazyload'

Vue.component('vue-headful', vueHeadful);
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

