<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;<button
        @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MySearch',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    searchUsers() {
      // 搜索之前更新列表数据
      this.$bus.$emit('updateUsersList', { isFirst: false, isLoading: true, errMsg: '', users: [] })
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        response => {
          console.log('请求成功！')
          this.$bus.$emit('updateUsersList', { isLoading: false, errMsg: '', users: response.data.items })
        },
        error => {
          console.log('请求失败！')
          this.$bus.$emit('updateUsersList', { isLoading: false, errMsg: error.message, users: [] })
        }
      )
    }
  }
}
</script>

<style>
</style>