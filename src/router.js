import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Forget from './views/Forget.vue'
import Dashboard from './views/Dashboard.vue'
import Mail from './views/Mail.vue'
import NotFound from './views/NotFound.vue'
import AppEmailBody from './components/AppEmailBody.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/forget', component: Forget, meta: {cantEnter: true} },
    { path: '/dashboard', 
    component: Dashboard, 
    name : 'home', 
    beforeEnter() {
      console.log('beforeEnter');
    } },
    { path: '/mail', component: Mail, children: [
      { path: ':mailId?', component: AppEmailBody, props: true }
    ]},
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

export default router