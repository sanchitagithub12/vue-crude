import Vue from 'vue'
//import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'

Vue.config.productionTip = false

new Vue({
  //router,
  render: h => h(App),
})
  //.use(router)
  .$mount('#app')
//createApp(App).mount('#app')


