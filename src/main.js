import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import VueMeta from "vue-meta";
import "./assets/scss/app.scss";

Vue.use(Buefy);
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
