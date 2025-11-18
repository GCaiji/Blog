<template>
  <div class="about-me">
    <div class="card">
      <div class="avatar">
        <img class="avatar-img" :src="profileImg" alt="头像" loading="lazy" />
      </div>
      <div class="about-inner">
        <h2 class="about-title">黄子健</h2>
        <p class="about-subtitle">前端爱好者 · 3D 爱好者 · 技术爱好者</p>

        <p class="about-text">
          你好，我是前端开发者，热爱构建交互和探索新技术。这里会分享我的项目、笔记与学习记录。
          同时我也是来自浙江水利水电的大学生，希望在实践中学习和进步。
        </p>

        <div class="about-actions">
          <button class="btn btn-primary" @click="goHome">返回主页</button>
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
import { transitionName } from '@/utils/transition'
import profileImg from '@/assets/logos/ProfilePhoto.jpg'

const router = useRouter()
const navigated = ref(false)
let touchStartY = 0

function goHome() {
  if (navigated.value) return
  navigated.value = true
  transitionName.value = 'slide-down'
  router.push({ name: 'Home' })
}

function onWheel(e: WheelEvent) {
  if (navigated.value) return
  // deltaY < 0 means wheel up (scrolling up) -> go previous (Home)
  if (e.deltaY < -60) {
    goHome()
  }
}

function onTouchStart(e: TouchEvent) {
  touchStartY = e.touches[0]?.clientY || 0
}

function onTouchEnd(e: TouchEvent) {
  if (navigated.value) return
  const endY = (e.changedTouches && e.changedTouches[0]?.clientY) || 0
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

<style scoped>
.about-me {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #5b6bf6 0%, #6f4bb6 60%, #2b2340 100%);
  position: relative;
  overflow: hidden;
}

.bg-blob {
  position: absolute;
  filter: blur(60px);
  opacity: 0.6;
  pointer-events: none;
}
.blob-1 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle at 30% 30%, rgba(255, 130, 92, 0.18), transparent 40%);
  top: -80px;
  left: -60px;
}
.blob-2 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle at 70% 70%, rgba(102, 126, 234, 0.12), transparent 35%);
  bottom: -100px;
  right: -80px;
}

.card {
  display: flex;
  gap: 28px;
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  padding: 30px 36px;
  border-radius: 16px;
  backdrop-filter: blur(8px) saturate(120%);
  box-shadow: 0 10px 30px rgba(11, 12, 35, 0.45);
  max-width: 980px;
  width: 100%;
  z-index: 6;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff8260, #ffb86b);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1b1330;
  font-weight: 700;
  font-size: 2.2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.about-inner {
  color: #f8f8ff;
}

.about-title {
  font-size: 2.2rem;
  margin: 0 0 6px 0;
  letter-spacing: -0.5px;
}
.about-subtitle {
  margin: 0 0 14px 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.98rem;
}
.about-text {
  font-size: 1.03rem;
  line-height: 1.75;
  color: rgba(240, 240, 255, 0.92);
  margin-bottom: 18px;
}

.about-actions {
  margin-top: 6px;
}

.btn {
  padding: 10px 22px;
  border-radius: 26px;
  border: none;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}
.btn:focus {
  outline: 2px solid rgba(255, 255, 255, 0.12);
}

.btn-primary {
  background: linear-gradient(90deg, #ffffff, #f0f4ff);
  color: #4a3bd6;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(74, 59, 214, 0.18);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(74, 59, 214, 0.22);
}

@media (max-width: 880px) {
  .card {
    flex-direction: column;
    align-items: center;
    padding: 24px;
  }
  .avatar {
    width: 96px;
    height: 96px;
    font-size: 1.6rem;
  }
  .about-title {
    font-size: 1.8rem;
    text-align: center;
  }
  .about-inner {
    text-align: center;
  }
}
</style>
