// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import routes from "./routes"
import Bmob from "hydrogen-js-sdk";

// 初始化 SDK版本 2.0.0 以下保留之前的初始化方法
Bmob.initialize("459e307357c0d0e1", "760710");

// 挂载到全局使用
Vue.prototype.Bmob = Bmob

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes,
  mode:"history"
})



//自定义指令
Vue.directive("rainbow",{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
});
Vue.directive("theme",{
  bind(el,binding,vnode){
    if (binding.arg === "column") {
      el.style.backgroundColor = "skyblue"
    }
    if (binding.value === "wide") {
      el.style.maxWidth = "1000px"
    }else if (binding.value === "nor") {
      el.style.maxWidth = "600px"
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
