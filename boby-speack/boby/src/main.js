import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false



import "./style/index.css";//全局样式
import "./components/";//公共的组件
import "./static/font/iconfont.css"//icon图标
import "./untils/sendRem";//移动端适配
import "./api/";//api优化
import "./untils/createling";//创建指令
import alert from "./plugins/alert";//弹框加载
Vue.use(alert)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
