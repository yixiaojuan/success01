<template>
  <div>    
    <router-view></router-view>
    <h1>bitunx.com 首页</h1>
    <button @click="count++">Count is: {{ count }}</button>
    <h1>hello</h1>
    <hr>
    <div>
      <p>{{ text }}</p>
    </div>
    <span v-html="text"></span>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 100,
      text: 'div元素',
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>