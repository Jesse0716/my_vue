<template>
  <div class="container">
    <my-search />
    <my-list />
  </div>
</template>

<script>
import MyList from './components/MyList'
import MySearch from './components/MySearch'
export default {
  components: { MySearch, MyList },
  name: 'App'
}
</script>