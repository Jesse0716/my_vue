// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import MyAbout from '../components/MyAbout.vue'
import MyHome from '../components/MyHome.vue'
// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: MyAbout
    },
    {
      path: '/home',
      component: MyHome
    }
  ]
})