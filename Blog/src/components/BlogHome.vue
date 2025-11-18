<template>
  <div class="blog-home">
    <!-- 背景粒子效果 -->
    <div class="background-particles">
      <div class="particle" v-for="i in 50" :key="i" :style="{ '--delay': i * 0.05 + 's' }"></div>
    </div>

    <!-- 欢迎内容 -->
    <div class="content-wrapper">
      <div class="content">
        <!-- 标题动画 -->
        <h1 class="title">
          <span
            class="title-char"
            v-for="(char, index) in titleChars"
            :key="`title-${index}`"
            :style="{ '--char-delay': index * 0.1 + 's' }"
          >
            {{ char }}
          </span>
        </h1>

        <!-- 副标题 -->
        <p class="subtitle">
          <span
            v-for="(char, index) in subtitleChars"
            :key="`sub-${index}`"
            :style="{ '--char-delay': titleChars.length * 0.1 + index * 0.05 + 's' }"
          >
            {{ char }}
          </span>
        </p>

        <!-- 装饰线 -->
        <div class="divider"></div>

        <!-- 描述文本 -->
        <p class="description">在这里，我分享关于前端开发、技术探索与生活思考的文章</p>

        <!-- 交互按钮 -->
        <div class="action-buttons">
          <button class="btn btn-primary">开始探索</button>
          <button class="btn btn-secondary">关于我</button>
        </div>
      </div>

      <!-- 右侧装饰元素 -->
      <div class="decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
    </div>

    <!-- 向下滚动提示 -->
    <div class="scroll-hint">
      <div class="scroll-indicator">
        <div class="wheel"></div>
      </div>
      <p>向下滚动</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import '@/styles/BlogHome.css'

const title = '欢迎来到我的博客'
const subtitle = '探索技术的无限可能'

const titleChars = computed(() => title.split(''))
const subtitleChars = computed(() => subtitle.split(''))
</script>
