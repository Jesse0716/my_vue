<template>
  <div class="container">
    <my-category title="美食">
      <img src="https://v2.cn.vuejs.org/images/logo.svg" alt="">
    </my-category>
    <my-category :title="游戏">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </my-category>
    <my-category :title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
.container {
  display: flex;
  justify-content: space-around;
}
</style>