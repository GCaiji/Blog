<template>
  <div class="deep-explore">
    <!-- 背景装饰 -->
    <div class="bg-decoration">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>

    <!-- 主内容 -->
    <div class="explore-content">
      <h1 class="title">深入探索</h1>
      <div class="placeholder">
        <div class="icon">🚀</div>
        <p class="text">敬请期待</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { transitionName, canTransition, recordTransition } from '@/utils/transition'
import '@/styles/DeepExplore.css'

const router = useRouter()
const navigated = ref(false)
let touchStartY = 0

function goBack() {
  if (navigated.value || !canTransition()) return
  navigated.value = true
  recordTransition()
  transitionName.value = 'slide-down'
  router.push({ name: 'About' })
}

function onWheel(e: WheelEvent) {
  if (navigated.value || !canTransition()) return
  // deltaY < 0 means wheel up (scrolling up) -> go back to About
  if (e.deltaY < -60) {
    goBack()
  }
}

function onTouchStart(e: TouchEvent) {
  touchStartY = e.touches[0]?.clientY || 0
}

function onTouchEnd(e: TouchEvent) {
  if (navigated.value || !canTransition()) return
  const endY = (e.changedTouches && e.changedTouches[0]?.clientY) || 0
  // swipe down (endY - startY > 80) -> goBack
  if (endY - touchStartY > 80) {
    goBack()
  }
}

onMounted(() => {
  window.addEventListener('wheel', onWheel, { passive: true })
  window.addEventListener('touchstart', onTouchStart, { passive: true })
  window.addEventListener('touchend', onTouchEnd, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('wheel', onWheel)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchend', onTouchEnd)
})
</script>
