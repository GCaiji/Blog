<script setup lang="ts">
import { transitionName } from '@/utils/transition'
import ClickParticles from '@/components/ClickParticles.vue'
</script>

<script lang="ts">
// register globally in this file's template scope
export default {
  components: { ClickParticles },
}
</script>

<template>
  <div id="app">
    <ClickParticles />
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
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
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* 根背景色，避免切换间隙出现白色 */
  background: #1b1330;
}

#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #1b1330;
  position: relative;
}

/* 默认淡入动画（备用）
   在 enter-from / leave-to 阶段将视图绝对定位并撑满容器，
   这样旧视图与新视图会重叠，避免短暂露出根白色背景。 */
.route-enter-active,
.route-leave-active {
  transition:
    opacity 400ms ease,
    transform 400ms ease;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(16px);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

/* 淡出淡入动画（渐进渐出效果） */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 400ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

/* 向上滑动进入（内容从下往上移入） */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 420ms cubic-bezier(0.22, 0.9, 0.35, 1);
}
/* 新页面从屏幕下方滑入，旧页面同时向上滑出（整屏滑动） */
.slide-up-enter-from {
  transform: translateY(100%);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.slide-up-enter-to {
  transform: translateY(0);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.slide-up-leave-from {
  transform: translateY(0);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.slide-up-leave-to {
  transform: translateY(-100%);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

/* 向下滑动进入（内容从上往下移入） */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 420ms cubic-bezier(0.22, 0.9, 0.35, 1);
}
/* 新页面从屏幕上方滑入，旧页面同时向下滑出（整屏滑动） */
.slide-down-enter-from {
  transform: translateY(-100%);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.slide-down-enter-to {
  transform: translateY(0);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.slide-down-leave-from {
  transform: translateY(0);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.slide-down-leave-to {
  transform: translateY(100%);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
</style>
