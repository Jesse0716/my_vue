// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import MyAbout from '../pages/MyAbout.vue'
import MyHome from '../pages/MyHome.vue'
import MyNews from '../pages/MyNews.vue'
import MyMessage from '../pages/MyMessage.vue'
import MyDetail from '../pages/MyDetail.vue'

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: 'About',
      path: '/about',
      component: MyAbout
    },
    {
      name: 'Home',
      path: '/home',
      component: MyHome,
      children: [
        {
          name: 'News',
          path: 'news',
          component: MyNews
        },
        {
          name: 'Message',
          path: 'message',
          component: MyMessage,
          children: [
            {
              name: 'Detail',
              path: 'detail',
              component: MyDetail,
              // props的第二种写法（params参数），值为布尔值，若为真，就会把该路由组件收到的所有param参数以prop形式传给Detail组件
              // props: true

              // props的第三种写法(query参数)
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title
                }
              }
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (to.path === '/home/news' || to.path === '/home/message') {
    if (localStorage.getItem('school') === 'atguigu') {
      next()
    } else {
      alert('学校名称不对，无权限查看！')
    }
  } else {
    next()
  }
})

export default router