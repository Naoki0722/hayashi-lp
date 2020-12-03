import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from "vue-carousel"
import VueScrollTo from "vue-scrollto";
import VueLazyload from "vue-lazyload";

Vue.use(VueCarousel);
Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -80,
});
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "https://dummyimage.com/130x120/ccc/999.png&text=Not+Found",
  loading: "https://dummyimage.com/130x120/dcdcdc/999.png&text=Now loading",
  attempt: 1,
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
