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
import '@/styles/ContactModal.css'

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
