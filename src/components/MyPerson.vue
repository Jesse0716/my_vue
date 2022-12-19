<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件的sum为: {{sum}}</h3>
    <h3>第一个人的名字为：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addPersonWang">添加一个姓王的人</button>
    <button @click="addPersonServer">随机添加一个人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
// import { mapState } from 'vuex'
export default {
  name: 'MyPerson',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    }
    // ...mapState(['personList'])
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name }
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ''
      // console.log(personObj)
    },
    addPersonWang() {
      const personObj = { id: nanoid(), name: this.name }
      this.$store.dispatch('personAbout/addPersonWang', personObj)
      this.name = ''
    },
    addPersonServer() {
      this.$store.dispatch('personAbout/addPersonServer')
    }
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>