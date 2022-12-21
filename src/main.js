//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//完整引入
// 引入element-ui
// import ElementUI from 'element-ui'
// 引入element-ui的全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false
// 应用element-ui
// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Row)
Vue.use(DatePicker)
// Vue.component(Button.name, Button);
// Vue.component(Row.name, Row);
// Vue.component(DatePicker.name, DatePicker);
//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
})