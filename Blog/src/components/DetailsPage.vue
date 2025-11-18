<template>
  <div class="details">
    <!-- 背景装饰 -->
    <div class="bg-decoration">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>

    <!-- 主容器 -->
    <div class="details-container">
      <!-- 返回按钮 -->
      <button class="back-btn" @click="goBack" :title="'返回'">
        <span class="back-icon">←</span>
      </button>

      <!-- 内容区域 -->
      <div class="details-content">
        <h1 class="page-title">更多关于我</h1>

        <!-- 专业技能 -->
        <section class="section">
          <h2 class="section-title">专业技能</h2>
          <div class="skills-grid">
            <div class="skill-card">
              <div class="skill-icon">🎨</div>
              <h3>前端开发</h3>
              <p>Vue 3、TypeScript、React、Tailwind CSS</p>
            </div>
            <div class="skill-card">
              <div class="skill-icon">🚀</div>
              <h3>Web 技术</h3>
              <p>Vite、Webpack、WebGL、Three.js</p>
            </div>
            <div class="skill-card">
              <div class="skill-icon">💻</div>
              <h3>全栈开发</h3>
              <p>Node.js、Express、数据库设计</p>
            </div>
            <div class="skill-card">
              <div class="skill-icon">🎯</div>
              <h3>3D 图形</h3>
              <p>Babylon.js、Three.js、WebGL</p>
            </div>
          </div>
        </section>

        <!-- 项目经验 -->
        <section class="section">
          <h2 class="section-title">项目经验</h2>
          <div class="projects-list">
            <div class="project-item">
              <h3>个人博客网站</h3>
              <p class="project-tech">Vue 3 · TypeScript · Vite</p>
              <p class="project-desc">
                一个交互式个人博客网站，展示前端开发和3D技术的融合。支持流畅的页面过渡、粒子特效和响应式设计。
              </p>
            </div>
            <div class="project-item">
              <h3>3D 可视化应用</h3>
              <p class="project-tech">Three.js · WebGL · TypeScript</p>
              <p class="project-desc">
                使用 Three.js 和 WebGL 创建的交互式 3D
                可视化应用，包含模型加载、光照效果和动画系统。
              </p>
            </div>
            <div class="project-item">
              <h3>数据展示平台</h3>
              <p class="project-tech">Vue 3 · ECharts · Node.js</p>
              <p class="project-desc">
                一个综合数据展示平台，实现实时数据更新、交互式图表和复杂的业务逻辑处理。
              </p>
            </div>
          </div>
        </section>

        <!-- 教育背景 -->
        <section class="section">
          <h2 class="section-title">教育背景</h2>
          <div class="education">
            <div class="edu-item">
              <h3>浙江水利水电学院</h3>
              <p class="edu-degree">计算机科学与技术 (本科)</p>
              <p class="edu-time">2022 - 2026</p>
              <p class="edu-desc">
                专注于前端开发和 Web 技术研究，参与多个实际项目开发，积累了扎实的编程基础。
              </p>
            </div>
          </div>
        </section>

        <!-- 兴趣爱好 -->
        <section class="section last-section">
          <h2 class="section-title">兴趣爱好</h2>
          <div class="interests">
            <span class="interest-tag">前端开发</span>
            <span class="interest-tag">3D 图形</span>
            <span class="interest-tag">Web 技术</span>
            <span class="interest-tag">UI/UX 设计</span>
            <span class="interest-tag">开源贡献</span>
            <span class="interest-tag">技术分享</span>
          </div>
        </section>

        <!-- 操作按钮 -->
        <div class="action-buttons">
          <button class="btn btn-primary" @click="goHome">返回主页</button>
          <button class="btn btn-secondary">联系我</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { transitionName, canTransition, recordTransition } from '@/utils/transition'

const router = useRouter()
const navigated = ref(false)

function goBack() {
  if (navigated.value || !canTransition()) return
  navigated.value = true
  recordTransition()
  transitionName.value = 'fade'
  router.back()
}

function goHome() {
  if (navigated.value || !canTransition()) return
  navigated.value = true
  recordTransition()
  transitionName.value = 'fade'
  router.push({ name: 'Home' })
}
</script>

<style scoped>
.details {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 80px 20px 40px;
  box-sizing: border-box;
}

/* 背景装饰 */
.bg-decoration {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  filter: blur(60px);
  opacity: 0.15;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle at 30% 30%, rgba(91, 107, 246, 0.4), transparent 50%);
  top: 10%;
  right: 5%;
}

.blob-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle at 70% 70%, rgba(255, 130, 92, 0.3), transparent 50%);
  bottom: 10%;
  left: 5%;
}

/* 返回按钮 */
.back-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
  font-size: 24px;
  cursor: pointer;
  transition:
    all 300ms ease,
    transform 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.back-btn:active {
  transform: scale(0.95);
}

/* 主容器 */
.details-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* 页面标题 */
.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: -0.5px;
}

/* 内容区域 */
.details-content {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 50px 40px;
  backdrop-filter: blur(10px) saturate(120%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* 部分标题 */
.section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(91, 107, 246, 0.3);
}

/* 技能卡片 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.skill-card {
  background: rgba(91, 107, 246, 0.08);
  border: 1px solid rgba(91, 107, 246, 0.2);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition:
    all 300ms ease,
    transform 200ms ease;
  cursor: pointer;
}

.skill-card:hover {
  background: rgba(91, 107, 246, 0.12);
  border-color: rgba(91, 107, 246, 0.4);
  transform: translateY(-5px);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.skill-card h3 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 10px;
}

.skill-card p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* 项目列表 */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-item {
  background: rgba(255, 130, 92, 0.05);
  border-left: 4px solid rgba(255, 130, 92, 0.4);
  border-radius: 8px;
  padding: 24px;
  transition:
    all 300ms ease,
    transform 200ms ease;
}

.project-item:hover {
  background: rgba(255, 130, 92, 0.1);
  transform: translateX(8px);
}

.project-item h3 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 8px;
}

.project-tech {
  font-size: 0.9rem;
  color: rgba(255, 130, 92, 0.8);
  margin-bottom: 12px;
  font-weight: 500;
}

.project-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
}

/* 教育背景 */
.education {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.edu-item {
  background: rgba(102, 126, 234, 0.08);
  border-left: 4px solid rgba(102, 126, 234, 0.4);
  border-radius: 8px;
  padding: 24px;
}

.edu-item h3 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 8px;
}

.edu-degree {
  font-size: 1rem;
  color: rgba(102, 126, 234, 0.8);
  font-weight: 500;
  margin-bottom: 4px;
}

.edu-time {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 12px;
}

.edu-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
}

/* 兴趣标签 */
.interests {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.interest-tag {
  display: inline-block;
  background: rgba(91, 107, 246, 0.15);
  color: rgba(91, 107, 246, 0.9);
  padding: 10px 18px;
  border-radius: 20px;
  font-size: 0.95rem;
  border: 1px solid rgba(91, 107, 246, 0.25);
  transition:
    all 300ms ease,
    transform 200ms ease;
  cursor: default;
}

.interest-tag:hover {
  background: rgba(91, 107, 246, 0.25);
  border-color: rgba(91, 107, 246, 0.4);
  transform: translateY(-2px);
}

/* 最后一个部分 */
.last-section {
  margin-bottom: 40px;
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 40px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 32px;
  border-radius: 26px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition:
    all 300ms ease,
    transform 200ms ease;
}

.btn-primary {
  background: linear-gradient(135deg, #5b6bf6, #6f4bb6);
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(91, 107, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(91, 107, 246, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .details {
    padding: 70px 15px 30px;
  }

  .page-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .details-content {
    padding: 30px 20px;
  }

  .section-title {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
