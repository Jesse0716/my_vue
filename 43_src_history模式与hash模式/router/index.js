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
  mode: 'history',
  routes: [
    {
      name: 'About',
      path: '/about',
      component: MyAbout,
      meta: { isAuth: true, title: '关于' }
    },
    {
      name: 'Home',
      path: '/home',
      component: MyHome,
      meta: { isAuth: true, title: '主页' },
      children: [
        {
          name: 'News',
          path: 'news',
          component: MyNews,
          meta: { isAuth: true, title: '新闻' },
          /* beforeEach: (to, from, next) => {
            console.log('前置路由守卫', to, from)
            if (to.meta.isAuth) {
              if (localStorage.getItem('school') === 'atguigu') {
                next()
              } else {
                alert('学校名称不对，无权限查看！')
              }
            } else {
              next()
            }
          } */
        },
        {
          name: 'Message',
          path: 'message',
          component: MyMessage,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              name: 'Detail',
              path: 'detail',
              component: MyDetail,
              meta: { isAuth: true, title: '详情' },
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
// 全局前置路由守卫 --- 初始化时被调用，每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
  console.log('前置路由守卫', to, from)
  if (to.name === 'News' || to.name === 'Message') {
    if (to.meta.isAuth) {
      next()
    } else {
      alert('学校名称不对，无权限查看！')
    }
  } else {
    next()
  }
}) */

// 全局后置路由守卫 --- 初始化时被调用，每次路由切换之后被调用
router.afterEach((to, from) => {
  console.log('后置路由守卫', to, from)
  document.title = to.meta.title || '硅谷系统'
})
export default router