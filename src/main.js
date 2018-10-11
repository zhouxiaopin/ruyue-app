// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
//引入app.vue 用他的内容来替换div id = app
import App from './App'
import routes from './routes'

import 'mint-ui/lib/style.css'
import './assets/css/my-mint.css'//全局修改mint-UI样式
import './assets/css/common.css'

import './assets/js/zoom'

Vue.config.productionTip = false;

Vue.use(MintUI);
Vue.use(VueRouter);
/* eslint-disable no-new */

//构建vue实例
// new Vue({
//   el: '#app',
//   render:function (c) {
// 		return c(App)
// 	}
// })

const router = new VueRouter({
  routes// (缩写) 相当于 routes: routes
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
