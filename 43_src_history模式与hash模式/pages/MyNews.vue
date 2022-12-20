<template>
  <div>
    <ul>
      <li :style="{opacity}">欢迎学习Vue</li>
      <li>news001<input type="text"></li>
      <li>news002<input type="text"></li>
      <li>news003<input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyNews',
  data() {
    return {
      opacity: 1
    }
  },
  activated() {
    this.timer = setInterval(() => {
      console.log('MyNews组件激活了！')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    console.log('MyNews组件失活了！')
    clearInterval(this.timer)
  }
}
</script>

<style>
</style>