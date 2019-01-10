import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login.vue';
import salaryDetail from '@/view/page/employee/salaryDetail.vue';
import taxTask from '@/view/page/task/taxTask.vue';
import invoiceDetail from '../view/invoiceDetail/invoiceDetail';
import uploadInvoice from '../view/uploadInvoice/uploadInvoice';
import invoiceAuth from '../view/invoiceAuth/invoiceAuth';
import invoiceDetailEdit from '../view/invoiceDetailEdit/invoiceDetailEdit';
import assetsLiabilities from "../view/assetsLiabilities/assetsLiabilities";
import startPage from '../view/startPage/startPage'
import homePage from '../view/homePage/homePage'


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
        title: '上传页面'
      }
    },
    {
      path: '/start',
      name: 'startPage',
      component: startPage,
      meta: {
        title: '启动页面'
      }
    },
    {
      path: '/homepage',
      name: 'homePage',
      component: homePage,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/invoice',
      name: 'invoiceDetail',
      component: invoiceDetail,
      meta: {
        title: '发票采集页面'
      }
    },
    {
      path: '/auth',
      name: 'invoiceAuth',
      component: invoiceAuth,
      meta: {
        title: '发票认证页面'
      }
    },
    {
      path: '/invoiceedit',
      name: 'invoiceDetailEdit',
      component: invoiceDetailEdit,
      meta: {
        title: '发票认证编辑'
      }
    },
    {
      path: '/assets',
      name: 'assetsLiabilities',
      component: assetsLiabilities,
      meta: {
        title: '资产负债表'
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
    path: '/employee/',
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
    {
      path: '/addEmployee',
      name: 'addEmployee',
      component: resolve => require(['../view/page/employee/addEmployee.vue'], resolve),
      meta: {
        title: '添加员工'
      },
    },
    {
      path: '/editEmSalary',
      name: 'editEmSalary',
      component: resolve => require(['../view/page/employee/editEmSalary.vue'], resolve),
      meta: {
        title: '编辑员工'
      },
    },
    {
      path: '/socialSecurity',
      name: 'socialSecurity',
      component: resolve => require(['../view/page/socialSecurity/socialSecurity.vue'], resolve),
      meta: {
        title: '社保明细'
      },
    },
    {
      path: '/socialSecurityDetail',
      name: 'socialSecurityDetail',
      component: resolve => require(['../view/page/socialSecurity/socialSecurityDetail.vue'], resolve),
      meta: {
        title: '社保明细查看'
      },
    },
    {
      path: '/socialSecurityEdit',
      name: 'socialSecurityEdit',
      component: resolve => require(['../view/page/socialSecurity/socialSecurityEdit.vue'], resolve),
      meta: {
        title: '社保明细编辑'
      },
    },
    {
      path: '/socialSecurityUpload',
      name: 'socialSecurityUpload',
      component: resolve => require(['../view/page/socialSecurity/socialSecurityUpload.vue'], resolve),
      meta: {
        title: '社保明细上传'
      },
    },
    {
      path: '/socialSecurityLook',
      name: 'socialSecurityLook',
      component: resolve => require(['../view/page/socialSecurity/socialSecurityLook.vue'], resolve),
      meta: {
        title: '查看'
      },
    },
    {
      path: '/bank',
      name: 'bank',
      component: resolve => require(['../view/page/bank/bank.vue'], resolve),
      meta: {
        title: '银行流水'
      },
    },
    {
      path: '/task/',
      name: 'task',
      component: resolve => require(['../view/page/task/task.vue'], resolve),
      children: [{
        path: 'taxTask',
        name: 'taxTask',
        component: resolve => require(['../view/page/task/taxTask.vue'], resolve),
        meta: {
          title: '财税业务'
        },
      }, {
        path: 'comprehensiveTask',
        name: 'comprehensiveTask',
        component: resolve => require(['../view/page/task/comprehensiveTask.vue'], resolve),
        meta: {
          title: '综合业务'
        },
      },
      {
        path: '',
        redirect: taxTask
      }]
    },
    {
      path: '/taxDetail',
      name: 'taxDetail',
      component: resolve => require(['../view/page/task/taxDetail.vue'], resolve),
      meta: {
        title: '查看任务'
      },
    },
    {
      path: '/comprehensiveDetail',
      name: 'comprehensiveDetail',
      component: resolve => require(['../view/page/task/comprehensiveDetail.vue'], resolve),
      meta: {
        title: '查看任务'
      },
    },
  ]
})
