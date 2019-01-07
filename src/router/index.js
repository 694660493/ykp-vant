import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/Login.vue';
import mine from '@/view/mine/mine.vue'
import home from '@/view/home/home.vue'
import StartPage from '../components/StartPage/StartPage'
import {
  resolve
} from 'upath';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录页'
      }
    },
    {
      path: '/start',
      name: 'StartPage',
      component: StartPage,
      meta: {
        title: '第一页'
      }
    },

    {
      path: '/mine',
      name: 'mine',
      component: resolve => require(['../view/mine/mine.vue'], resolve),
      meta: {
        title: '我的'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../view/home/home.vue'], resolve),
      meta:{
        title: "首页"
      }
    }
    
  ]
})
