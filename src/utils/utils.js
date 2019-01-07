//存储数据到localStorage
export const setItem = (key, val) => {
  let storage = window.localStorage;
  storage.setItem(key, JSON.stringify(val));
  // console.log(444444444)
  return val;
}
//从localStorage获取数据
export const getItem = (key) => {
  let storage = window.localStorage;
  let val = JSON.parse(storage.getItem(key));
  return val;
}
//从localStorage删除数据
export const removeItem = (key) => {
  let storage = window.localStorage;
  if (key) {
    storage.removeItem(key);
  }
}
export const timeTodate = (val) => {
  let date = new Date(val);
  let seperator1 = "-";
  let seperator2 = ":";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let days = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (month >= 0 && month <= 9) {
    month = "0" + month;
  }
  if (days >= 0 && days <= 9) {
    days = "0" + days;
  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds;
  }
  let time = year + seperator1 + month + seperator1 + days +
    " " + hours + seperator2 + minutes +
    seperator2 + seconds;
  return time;
}
export const remainder = (key) => {
  let str = key.toString().replace('.', '小时');
  return str + '分钟';
}
export const replaceTime = (key) => {
  let str = key.toString().replace('T', ' ');
  return str;
}

export const getQueryString = (name)=> { 
  var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
  var r =window.location.search.substr(1).match(reg); 
  if (r != null) 
    return unescape(r[2]); 
  return null; 
} 