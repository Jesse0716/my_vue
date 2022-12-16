<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games">我是默认值，当使用者没有传递具体结构时我会出现1</slot>
  </div>
</template>

<script>
export default {
  name: 'MyCategory',
  props: ['title'],
  data() {
    return {
      games: ['超级玛丽', '冒险岛', '吃鸡', 'LOL']
    }
  }
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>