import Vue from 'vue'
import App from './App.vue'

import store from './store'

import DsSprite from './components/Sprite';
import DsOcticon from './components/Octicon';
import DsHeader from './components/Header';

Vue.component('ds-sprite', DsSprite);
Vue.component('ds-octicon', DsOcticon);
Vue.component('ds-header', DsHeader);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
