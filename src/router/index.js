import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login.vue';
import salaryDetail from '@/view/page/employee/salaryDetail.vue';
import invoiceDetail from '../view/invoiceDetail/invoiceDetail';
import uploadInvoice from '../view/uploadInvoice/uploadInvoice';


import {
  resolve
} from 'upath';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/login',
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
      path: '/upload',
      name: 'uploadInvoice',
      component: uploadInvoice,
      meta: {
        title: '登录页'
      }
    },

    {
      path: '/invoice',
      name: 'invoiceDetail',
      component: invoiceDetail,
      meta: {
        title: '登录页'
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
    path: '/employee',
    name: 'employee',
    component: resolve => require(['../view/page/employee/employee.vue'], resolve),

    children: [{
      path: 'salaryDetail',
      name: 'salaryDetail',
      component: resolve => require(['../view/page/employee/salaryDetail.vue'], resolve),
      meta: {
        title: '工资明细'
      },
    }, {
      path: 'employeeManager',
      name: 'employeeManager',
      component: resolve => require(['../view/page/employee/employeeManager.vue'], resolve),
        meta: {
          title: '员工管理'
        },
    },
      {
        path: '',
        redirect: salaryDetail
      }
    ]
  },
  {
    path:'/salaryTable',
    name:'salaryTable',
    component: resolve => require(['../view/page/employee/salaryTable.vue'], resolve),
    meta: {
      title: '工资表'
    },
  },
    {
      path: '/emSalaryDetail',
      name: 'emSalaryDetail',
      component: resolve => require(['../view/page/employee/emSalaryDetail.vue'], resolve),
      meta: {
        title: '员工工资详情'
      },
    },
  ]
})
