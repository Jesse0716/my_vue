<template>
  <div>
    <my-count />
    <my-person />
  </div>
</template>

<script>
import MyCount from './components/MyCount.vue'
import MyPerson from './components/MyPerson.vue'
export default {
  components: { MyCount, MyPerson },
  name: 'App',
  mounted() {
    // console.log(this)
  }
}
</script>