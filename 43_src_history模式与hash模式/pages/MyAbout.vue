<template>
  <div>
    <h3>我是About</h3>
  </div>
</template>

<script>
export default {
  name: 'MyAbout',
  beforeRouteEnter(to, from, next) {
    console.log('独享组件内路由守卫', to, from)
    if (to.meta.isAuth) {
      if (localStorage.getItem('school') === 'atguigu') {
        next()
      } else {
        alert('学校名称不对，无权限查看！')
      }
    } else {
      next()
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('About--beforeRouteLeave', to, from)
    next()
  }
}
</script>

<style>
</style>