import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home/Home"
import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Projects from '@/components/Projects/Projects'
import Reports from '@/components/Reports'
import Events from '@/components/Events/Events'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/reports',
      component: Reports
    },
    {
      path: "/events",
      component: Events
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
