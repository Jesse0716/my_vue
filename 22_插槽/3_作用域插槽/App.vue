<template>
  <div class="container">

    <my-category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
        </ul>
      </template>

    </my-category>

    <my-category title="游戏">
      <template scope="atguigu">
        <ol>
          <li v-for=" (item,index) in atguigu.games" :key="index">{{item}}</li>
        </ol>
      </template>

    </my-category>

    <my-category title="游戏">
      <template scope="atguigu">
        <h4 v-for="(item,index) in atguigu.games" :key="index">{{item}}</h4>

      </template>
    </my-category>
  </div>
</template>

<script>
import MyCategory from './components/MyCategory.vue'
export default {
  components: { MyCategory },
  name: 'App'
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