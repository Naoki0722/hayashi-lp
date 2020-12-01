import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from "vue-carousel"
import VueScrollTo from "vue-scrollto";

Vue.use(VueCarousel);
Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -80,
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
