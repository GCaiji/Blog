<template>
  <div v-if="visible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">×</button>
      <div class="modal-inner">
        <h2 class="modal-title">联系我</h2>
        <p class="modal-subtitle">扫描二维码添加我的 QQ</p>
        <img :src="qqCodeImg" alt="QQ二维码" class="qr-code" />
        <p class="contact-tips">长按或保存二维码，在 QQ 中扫描即可添加</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import qqCodeImg from '@/assets/other/QQCode.jpg'

interface Props {
  modelValue: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const visible = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    visible.value = newVal
  },
)

function closeModal() {
  visible.value = false
  emit('update:modelValue', false)
}
</script>

<style scoped>
/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fade-in 0.3s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(91, 107, 246, 0.3);
  border-radius: 16px;
  padding: 40px 30px;
  max-width: 400px;
  width: 90%;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  animation: scale-in 0.3s ease-out;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  font-size: 28px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.modal-inner {
  text-align: center;
}

.modal-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
}

.modal-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
}

.qr-code {
  width: 200px;
  height: 300px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.contact-tips {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}
</style>
