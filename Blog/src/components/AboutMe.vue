<template>
  <div class="about-me">
    <div class="card">
      <div class="avatar">
        <img
          class="avatar-img"
          :src="profileImg"
          alt="头像"
          :style="{ opacity: imageLoaded ? 1 : 0 }"
          @load="imageLoaded = true"
          @error="imageLoaded = true"
        />
        <div v-if="!imageLoaded" class="avatar-placeholder">黄</div>
      </div>
      <div class="about-inner">
        <h2 class="about-title">黄子健</h2>
        <p class="about-subtitle">前端爱好者 · 3D 爱好者 · 技术爱好者</p>

        <p class="about-text">
          你好，我是前端开发者，热爱构建交互和探索新技术。这里会分享我的项目、笔记与学习记录。
          同时我也是来自浙江水利水电的大学生，希望在实践中学习和进步。
        </p>

        <div class="about-actions">
          <button class="btn btn-primary" @click="goToDetails">了解更多</button>
          <button class="btn btn-secondary" @click="goHome">返回主页</button>
        </div>
      </div>
    </div>
    <div class="bg-blob blob-1" aria-hidden="true"></div>
    <div class="bg-blob blob-2" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { transitionName, canTransition, recordTransition } from '@/utils/transition'
import profileImg from '@/assets/logos/ProfilePhoto.jpg'
import '@/styles/AboutMe.css'

const router = useRouter()
const navigated = ref(false)
const imageLoaded = ref(false)
let touchStartY = 0

function goToDetails() {
  if (navigated.value || !canTransition()) return
  navigated.value = true
  recordTransition()
  transitionName.value = 'fade'
  router.push({ name: 'Details' })
}

function goToExplore() {
  if (navigated.value || !canTransition()) return
  navigated.value = true
  recordTransition()
  transitionName.value = 'slide-up'
  router.push({ name: 'Explore' })
}

function goHome() {
  if (navigated.value || !canTransition()) return
  navigated.value = true
  recordTransition()
  transitionName.value = 'slide-down'
  router.push({ name: 'Home' })
}

function onWheel(e: WheelEvent) {
  if (navigated.value || !canTransition()) return
  // deltaY > 60 means wheel down (scrolling down) -> go to Explore
  if (e.deltaY > 60) {
    goToExplore()
  }
  // deltaY < 0 means wheel up (scrolling up) -> go previous (Home)
  if (e.deltaY < -60) {
    goHome()
  }
}

function onTouchStart(e: TouchEvent) {
  touchStartY = e.touches[0]?.clientY || 0
}

function onTouchEnd(e: TouchEvent) {
  if (navigated.value || !canTransition()) return
  const endY = (e.changedTouches && e.changedTouches[0]?.clientY) || 0
  // swipe up (startY - endY > 80) -> goToExplore
  if (touchStartY - endY > 80) {
    goToExplore()
  }
  // swipe down (endY - startY > 80) -> goHome
  if (endY - touchStartY > 80) {
    goHome()
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
