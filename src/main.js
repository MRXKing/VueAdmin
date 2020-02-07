import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/elementConfig'
import './plugins/echartsConfig'
import {i18n} from './plugins/i18n.js'


import {parseTime} from '@/views/excel/utils'

Vue.filter("parseTime",parseTime)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
