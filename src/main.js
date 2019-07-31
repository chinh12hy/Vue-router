import Vue from 'vue'
import App from './App.vue'
import router from './router/router' // import vue-router

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router // dùng vue router
}).$mount('#app');
