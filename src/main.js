import Vue from 'vue';
import App from './App.vue';


//1.安装 vue-router
//2.引入模块
import VueRouter from 'vue-router';

Vue.use(VueRouter);  /*必须得use*/


//3.引入组件。

import Home from './components/Home.vue';

import Zhuan from './components/Zhuan.vue';


//4.配置路由


const routes = [
  { path: '/home', component: Home },
  { path: '/zhuan', component: Zhuan}
]



//5。实例化VueRouter  注意单词

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes   /*注意属性的简写*/
})

//6.挂在到Vue实例上面
new Vue({
  el: '#app',

  router,
  render: h => h(App)
})

//7 App.vue 配置视图

// <router-view></router-view>