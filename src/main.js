import Vue from 'vue'
import App from './App.vue'

import store from './store'

import DsSprite from './components/sprite';

Vue.config.productionTip = false

Vue.component('ds-sprite', DsSprite)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
