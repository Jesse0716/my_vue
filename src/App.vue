<template>
  <div>
    <my-count />
  </div>
</template>

<script>
import MyCount from './components/MyCount.vue'
export default {
  components: { MyCount },
  name: 'App',
  mounted() {
    // console.log(this)
  }
}
</script>