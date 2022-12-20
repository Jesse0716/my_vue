// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import MyAbout from '../pages/MyAbout.vue'
import MyHome from '../pages/MyHome.vue'
import MyNews from '../pages/MyNews.vue'
import MyMessage from '../pages/MyMessage.vue'
import MyDetail from '../pages/MyDetail.vue'
// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: MyAbout
    },
    {
      path: '/home',
      component: MyHome,
      children: [
        {
          path: 'news',
          component: MyNews
        },
        {
          path: 'message',
          component: MyMessage,
          children: [
            {
              name: 'detail',
              path: 'detail',
              component: MyDetail
            }
          ]
        }
      ]
    }
  ]
})