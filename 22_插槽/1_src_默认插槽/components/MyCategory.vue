<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot></slot>
    <!-- <ul>
      <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'MyCategory',
  props: ['title']
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