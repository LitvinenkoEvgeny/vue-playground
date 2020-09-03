import Vue from 'vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router'


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount('#app')
