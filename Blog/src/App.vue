<script setup lang="ts">
import BlogHome from '@/components/BlogHome.vue'
</script>

<template>
  <div id="app">
    <BlogHome />
  </div>
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
