import Vue from 'vue'
import LayoutDefault from './layout/default'

import './assets/css/tailwind.css'
import router from './plugins/router'
import VueRouter from 'vue-router'
import 'tw-elements'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(LayoutDefault),
}).$mount('#app')
