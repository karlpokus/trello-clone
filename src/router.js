import Vue from 'vue'
import Router from 'vue-router'

import Board from '@/components/Board'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'board',
      path: '/board/:id',
      component: Board
    }
  ]
})
