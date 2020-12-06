import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Meta from 'vue-meta';
import Works from "@/views/Works";
import Skills from "@/views/Skills";
import Contact from "@/views/Contact";
import Terms from "@/views/Terms";
import UnderConstruction from "@/views/UnderConstruction";

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
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/under',
    name: 'Under',
    component: UnderConstruction
  }
]

const router = new VueRouter({
  routes
})

export default router
