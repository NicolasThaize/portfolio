import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta';

Vue.use(VueMeta);

Vue.config.productionTip = false

// Requiring all css files to make them work properly
require("./assets/main.scss");
require("./assets/css/custom.css");

// Requiring all javascript files to make burger and scroll work properly
require("./assets/js/burger.js");
require("./assets/js/scroll.js");



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
