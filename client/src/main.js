import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css'
import 'material-design-icons/iconfont/material-icons.css'
import '@/assets/style.less';



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
