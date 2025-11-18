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

<style scoped>
.deep-explore {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a0033 0%, #330066 50%, #1a0033 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 背景装饰 */
.bg-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  filter: blur(80px);
  opacity: 0.2;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle at 30% 30%, rgba(138, 43, 226, 0.5), transparent 50%);
  top: -100px;
  right: -50px;
}

.blob-2 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle at 70% 70%, rgba(75, 0, 130, 0.4), transparent 50%);
  bottom: -80px;
  left: -80px;
}

/* 主内容 */
.explore-content {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44ae0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 6s ease infinite;
}

.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.icon {
  font-size: 6rem;
  animation: bounce 3s ease-in-out infinite;
}

.text {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  letter-spacing: 2px;
}

/* 动画 */
@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .icon {
    font-size: 4rem;
  }

  .text {
    font-size: 1.3rem;
  }
}
</style>
