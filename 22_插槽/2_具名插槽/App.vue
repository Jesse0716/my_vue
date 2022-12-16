<template>
  <div class="container">
    <my-category title="美食">
      <img slot="center" src="https://v2.cn.vuejs.org/images/logo.svg" alt="">
      <a slot="footer" href="http://atguigu.com">更多美食</a>
    </my-category>
    <my-category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://atguigu.com">单机游戏</a>
        <a href="http://atguigu.com">网络游戏</a>
      </div>
    </my-category>
    <my-category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://atguigu.com">经典</a>
          <a href="http://atguigu.com">热门</a>
          <a href="http://atguigu.com">惊悚</a>
        </div>
        <h4>欢迎前来观影！</h4>
      </template>
    </my-category>
  </div>
</template>

<script>
import MyCategory from './components/MyCategory.vue'
export default {
  components: { MyCategory },
  name: 'App',
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['超级玛丽', '冒险岛', '吃鸡', 'LOL'],
      films: ['《教父》', '《无双》', '《活着》', '《上帝未死》']
    }
  }
}
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>