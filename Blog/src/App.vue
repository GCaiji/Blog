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
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/* 默认淡入动画（备用） */
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
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* 向上滑动进入（内容从下往上移入） */
.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    transform 420ms cubic-bezier(0.22, 0.9, 0.35, 1),
    opacity 420ms ease;
}
.slide-up-enter-from {
  transform: translateY(40px);
  opacity: 0;
}
.slide-up-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}

/* 向下滑动进入（内容从上往下移入） */
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    transform 420ms cubic-bezier(0.22, 0.9, 0.35, 1),
    opacity 420ms ease;
}
.slide-down-enter-from {
  transform: translateY(-40px);
  opacity: 0;
}
.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
