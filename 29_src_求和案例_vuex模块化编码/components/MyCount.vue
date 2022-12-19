<template>
  <div>
    <h1>求和案例</h1>
    <h3>当前求和为：{{ sum }}</h3>
    <h3>和的十倍为：{{ bigSum }}</h3>
    <h3>我在“{{school }}”学习《{{subject }}》</h3>
    <h3 style="color:red">Person组件的总人数为: {{personList.length}} </h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- <button @click="increment(n)">+</button> -->
    <button @click="ADD(n)">+</button>
    <!-- <button @click="decrement(n)">-</button> -->
    <button @click="DEC(n)">-</button>
    <!-- <button @click="incrementOdd(n)">当前求和为奇数再加</button> -->
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <!-- <button @click="incrementWait(n)">等一等再加</button> -->
    <button @click="addWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'MyCount',
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    //对象写法
    // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' })
    // 数组写法
    ...mapState('countAbout', ['sum', 'school', 'subject']),
    ...mapState('personAbout', ['personList']),

    // ...mapGetters({ bigSum: 'bigSum' })
    ...mapGetters('countAbout', ['bigSum'])
  },
  methods: {
    // 调用mapMutations生成对应的方法，方法会调用commit去联系mutations
    // ...mapMutations({ increment: 'ADD', decrement: 'DEC' }),
    ...mapMutations('countAbout', ['ADD', 'DEC']),

    // 调用mapActions生成对应的方法，方法会调用commit去联系mapActions
    // ...mapActions({ incrementOdd: 'addOdd', incrementWait: 'addWait' }),
    ...mapActions('countAbout', ['addOdd', 'addWait']),

  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>