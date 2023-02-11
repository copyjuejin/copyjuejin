export default function ({ $axios, redirect, route, store }) {
  //基本配置
  $axios.defaults.timeout = 10000; 
  //请求拦截
  $axios.onRequest((config) => {
    console.log("请求拦截"); 
    return config;
  }); 
  //响应拦截
  $axios.onResponse((res) => {
    console.log("响应拦截"); 
  }); 
  //错误处理
  $axios.onError((error) => {
    return error;
  });
}
