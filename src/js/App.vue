<script setup>
import { ref } from 'vue'
const message = ref('我是文件')
const add = () => (message.value = '谁说不是呢')
console.log('first')
</script>

<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <button @click="add">我来进行修改</button>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-size: 40px;
  color: red;
}
</style>
