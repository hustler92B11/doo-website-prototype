import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
// Product
import Product from '@/components/Product'
import hostingCloud from '@/components/Products/hostingCloud'
import brockerCloud from '@/components/Products/brockerCloud'
import inTrade from '@/components/Products/inTrade'

// Blog
import Blog from '@/components/Blog'
// About Us
import AboutUs from '@/components/AboutUs'
import AboutUsMission from '@/components/AboutUsMission'
import AboutUsHistory from '@/components/AboutUsHistory'
// Contact Us
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/aboutus#mission',
      name: 'AboutUsMission',
      component: AboutUsMission
    },
    {
      path: '/aboutus#history',
      name: 'AboutUsHistory',
      component: AboutUsHistory
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/product/',
      component: Product,
      props: true,
      children: [
        {
          path: 'hostingcloud',
          component: hostingCloud
        },
        {
          path: 'brokercloud',
          component: brockerCloud
        },
        {
          path: 'intrade',
          component: inTrade
        }
      ]
    }
  ]
})
