//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入插件
import VueResource from 'vue-resource'

// 使用插件
Vue.use(VueResource)

//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    // 安装全局时间总线
    Vue.prototype.$bus = this
  },
})