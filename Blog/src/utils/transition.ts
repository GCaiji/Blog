import { ref } from 'vue'

// 动态路由过渡名：'route' | 'slide-up' | 'slide-down' | 'fade'
export const transitionName = ref('route')

// 页面切换防抖机制：1秒内只能切换一次
let lastTransitionTime = 0
const TRANSITION_COOLDOWN = 500 // 毫秒

export function canTransition(): boolean {
  const now = Date.now()
  return now - lastTransitionTime >= TRANSITION_COOLDOWN
}

export function recordTransition(): void {
  lastTransitionTime = Date.now()
}

export function resetTransitionTime(): void {
  lastTransitionTime = 0
}
