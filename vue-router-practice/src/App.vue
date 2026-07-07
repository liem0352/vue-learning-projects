<template>
  <div>
    <h1>根组件主页</h1>
    <router-link to="/Home">Home 首页</router-link>
    <router-link to="/About">关于我们</router-link>
    <router-view></router-view>
    <a href=""></a>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* 你可以在这里添加一些样式 */
</style>

