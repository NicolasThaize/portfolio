import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Meta from 'vue-meta';
import Works from "@/views/Works";

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  }
]

const router = new VueRouter({
  routes
})

export default router
