import axios from 'axios';
import qs from 'qs';
import Vue from 'vue';
import cookie from '../utils/cookie'
import {
  Toast
} from 'vant';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://www.baidu.com';
// 请求拦截器
axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  // if (getItem('token')) {
  //   config.headers.token = getItem('token');
  // }
  return config;
}, function (error) {
  return Promise.reject(error);
})

//错误状态码处理提示
class MessageTip extends Vue {
  messageTipInstance = null;
  constructor() {
    super();
  }
  static instance(code) {
    if (!this.messageTipInstance) {
      this.messageTipInstance = new MessageTip();
    }
    this.messageTipInstance.errorInfo(code);
  }

  errorInfo(errorCode) {
    Toast.allowMultiple;
    switch (errorCode) {
      case 400:
        Toast.fail({
          message: '请求错误',
        })
        break;
      case 401:
        Toast.fail({
          message: '未授权'
        })
        break;
      case 403:
        Toast.fail({
          message: '拒绝访问'
        })

        break;
      case 404:
        Toast.fail({
          message: '请求地址出错',
        })

        break;
      case 405:
        Toast.fail({
          message: '请求类型出错',
        })
        break;
      case 408:
        Toast.fail({
          message: '请求超时',
        })
        break;

      case 500:
        Toast.fail({
          message: '服务器内部错误',
        })
        break;

      case 501:
        Toast.fail({
          message: '服务器未实现',
        })
        break;

      case 502:
        Toast.fail({
          message: '网络错误',
        })
        break;

      case 503:
        Toast.fail({
          message: '服务不可用',
        })
        break;

      case 504:
        Toast.fail({
          message: '网关超时',
        })
        break;

      case 505:
        Toast.fail({
          message: 'HTTP版本不受支持',
        })
        break;
    }
  }
}




// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  // console.log(error, error.response.status)
  MessageTip.instance(error.response.status);
  return Promise.reject(error);
})


export default {
  //get请求
  get(url, param) {
    let randParam = {
      ...param,
      rand: Math.random()
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res)
      }).catch((error) => {
        reject(error);
      })

    })
  },
  //post请求
  post(url, param) {
    let token = cookie.readCookie('wechat_token');
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'wechat_token': token ? token : 'OEgoKxNiD3FKLQZzJyk*OFAFBHEwQB4CMxEdEQ'
        }
      }).then(res => {
        resolve(res)
      }).catch((error) => {
        reject(error);
      })
    })
  }
}
