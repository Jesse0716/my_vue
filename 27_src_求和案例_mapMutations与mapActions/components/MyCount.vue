<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>和的十倍为：{{ bigSum }}</h1>
    <h1>我在“{{school }}”学习《{{subject }}》</h1>
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
    ...mapState(['sum', 'school', 'subject']),

    // ...mapGetters({ bigSum: 'bigSum' })
    ...mapGetters(['bigSum'])
  },
  methods: {
    // increment() {
    //   this.$store.commit('ADD', this.n)
    // },
    // decrement() {
    //   this.$store.commit('DEC', this.n)

    // },
    // 调用mapMutations生成对应的方法，方法会调用commit去联系mutations
    // ...mapMutations({ increment: 'ADD', decrement: 'DEC' }),
    ...mapMutations(['ADD', 'DEC']),

    // incrementOdd() {
    //   this.$store.dispatch('addOdd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('addWait', this.n)
    // }

    // 调用mapActions生成对应的方法，方法会调用commit去联系mapActions
    // ...mapActions({ incrementOdd: 'addOdd', incrementWait: 'addWait' }),
    ...mapActions(['addOdd', 'addWait']),

  },
  mounted() {
    // console.log(this)
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>