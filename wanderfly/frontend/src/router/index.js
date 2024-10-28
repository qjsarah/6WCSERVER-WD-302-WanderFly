import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import booking from '@/components/booking'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/booking',
      name: 'booking',
      component: booking
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/view-booking',
      name: 'view-booking',
      component: () => import('../components/booking-components/PassengerList.vue') 
    },
    {
      path: '/edit-passenger/:id', 
      name: 'edit',
      component: () => import('../components/booking-components/PassengerForm.vue') 
    },
  ]
})
