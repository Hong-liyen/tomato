import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Category from '@/components/Category'
import Food from '@/components/Food'
import Qa from '@/components/Qa'
import Bloggers from '@/components/Bloggers'


Vue.use(Router)

export default new Router({
  mode: 'history',	
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/qa',
      name: 'Qa',
      component: Qa
    },
    {
      path: '/bloggers',
      name: 'Bloggers',
      component: Bloggers
    }
  ]
})
