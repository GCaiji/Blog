<template>
  <!-- container stays at root and holds generated particles -->
  <div class="click-particles-root" ref="root" aria-hidden="true"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const root = ref<HTMLElement | null>(null)

function createParticles(x: number, y: number) {
  if (!root.value) return
  const colors = [
    'rgba(255,255,255,0.92)',
    'rgba(255,200,120,0.96)',
    'rgba(130,200,255,0.9)',
    'rgba(180,140,255,0.88)',
  ]

  const count = Math.floor(6 + Math.random() * 6) // 6-11 particles
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span')
    el.className = 'cp-particle'
    const size = Math.round(6 + Math.random() * 18)
    el.style.width = `${size}px`
    el.style.height = `${size}px`
    el.style.left = `${x - size / 2}px`
    el.style.top = `${y - size / 2}px`
    el.style.background = colors[Math.floor(Math.random() * colors.length)]

    const angle = Math.random() * Math.PI * 2
    const dist = 40 + Math.random() * 80
    const tx = Math.cos(angle) * dist
    const ty = Math.sin(angle) * dist
    const duration = 600 + Math.random() * 600

    el.style.setProperty('--tx', `${tx}px`)
    el.style.setProperty('--ty', `${ty}px`)
    el.style.setProperty('--dur', `${duration}ms`)
    el.style.setProperty('--delay', `${Math.random() * 80}ms`)

    root.value.appendChild(el)

    const remove = () => {
      el.removeEventListener('animationend', remove)
      if (el.parentNode) el.parentNode.removeChild(el)
    }
    el.addEventListener('animationend', remove)
  }
}

function onPointer(e: PointerEvent) {
  // ignore right-click / non-primary buttons
  if (e.button && e.button !== 0) return
  createParticles(e.clientX, e.clientY)
}

onMounted(() => {
  window.addEventListener('pointerdown', onPointer, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', onPointer)
})
</script>

<style>
.click-particles-root {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 9999;
}

.cp-particle {
  position: absolute;
  border-radius: 50%;
  will-change: transform, opacity;
  transform: translateZ(0);
  animation: cp-fly var(--dur, 800ms) cubic-bezier(0.2, 0.9, 0.25, 1) var(--delay, 0ms) forwards;
  box-shadow:
    0 6px 18px rgba(10, 12, 30, 0.18),
    inset 0 -1px 0 rgba(255, 255, 255, 0.06);
}

@keyframes cp-fly {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
  60% {
    opacity: 0.95;
  }
  100% {
    opacity: 0;
    transform: translate3d(var(--tx, 0), var(--ty, -20px), 0) scale(0.4);
  }
}

/* subtle ripple at click center (large, fading) */
.cp-ripple {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 40%);
  width: 12px;
  height: 12px;
  transform-origin: center;
  animation: cp-ripple 540ms ease-out forwards;
}

@keyframes cp-ripple {
  from {
    opacity: 0.9;
    transform: scale(0.6);
  }
  to {
    opacity: 0;
    transform: scale(6);
  }
}
</style>
