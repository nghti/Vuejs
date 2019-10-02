import Vue from 'vue'
import App from './views/App'

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
