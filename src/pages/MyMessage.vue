<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->
        <router-link :to="{
          // path:'/home/message/detail',
          name:'detail',
          query:{
            id:item.id,
            title:item.title
          }
        }">
          {{item.title}}
        </router-link>
        &nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyMessage',
  data() {
    return {
      messageList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' },
      ]
    }
  }
}
</script>

<style>
</style>