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
              <div class="skill-icon">🧑‍💻</div>
              <h3>编程语言</h3>
              <p>熟练掌握 Python、Java；熟悉 JavaScript、C#</p>
            </div>

            <div class="skill-card">
              <div class="skill-icon">⚛️</div>
              <h3>前端开发</h3>
              <p>
                熟悉 Vue2/3 及生态（Pinia、Element Plus），了解 TypeScript，具备响应式页面开发能力
              </p>
            </div>

            <div class="skill-card">
              <div class="skill-icon">🧰</div>
              <h3>后端开发</h3>
              <p>熟悉 Flask，了解 Spring 生态，掌握 RESTful API 设计与开发</p>
            </div>

            <div class="skill-card">
              <div class="skill-icon">🗄️</div>
              <h3>数据库</h3>
              <p>掌握 MySQL，了解数据库设计、索引优化与 SQL 调优</p>
            </div>

            <div class="skill-card">
              <div class="skill-icon">🔧</div>
              <h3>工具与工程化</h3>
              <p>熟练使用 Git，了解 WebSocket、Axios、ECharts 等，关注工程化实践</p>
            </div>

            <div class="skill-card">
              <div class="skill-icon">🎮</div>
              <h3>其他领域</h3>
              <p>熟悉 Unity3D、Blender，了解计算机图形学、WebGL 渲染管线与 Shader 原理</p>
            </div>

            <div class="skill-card">
              <div class="skill-icon">🤝</div>
              <h3>软技能</h3>
              <p>具备文档撰写能力、团队协作精神与快速学习能力</p>
            </div>
          </div>
        </section>

        <!-- 个人项目 -->
        <section class="section">
          <h2 class="section-title">个人项目</h2>
          <div class="projects-list">
            <div class="project-item">
              <h3>堤坝可视化管理系统（毕业设计）</h3>
              <p class="project-tech">
                2025.11 - 准备阶段 · 角色：全栈开发 · 技术栈：Vue3 + TypeScript + Cesium/Three.js +
                D3/ECharts + Node.js/Flask + PostgreSQL/PostGIS + WebSocket + Docker
              </p>
              <p class="project-desc">
                项目目标：构建面向堤坝与防洪工程的可视化管理平台，集成实时传感器数据、历史时序回放与
                3D 地形/堤坝模型展示，支持风险评估与告警机制，助力运维决策。
              </p>
              <p class="project-desc">
                主要职责（准备阶段）：总体方案设计、前端可视化框架选型与原型、GIS/三维数据管线设计、后端数据接入与
                API 规范、搭建轻量化容器化开发环境。
              </p>

              <p class="project-desc">
                预期成果：交付可跑通的演示原型（3D 可视化 +
                实时数据面板）、项目文档与毕业设计论文、示例数据集与 Docker 部署脚本。
              </p>
            </div>
            <div class="project-item">
              <h3>PyAgent —— 智能体的 Python 编程学习助理</h3>
              <p class="project-tech">
                角色：前端开发 · 技术栈：Vue3 + TypeScript + Pinia + Element Plus
              </p>
              <p class="project-desc">
                基于智能体的学习辅助工具，面向 Python
                初学者，提供交互式代码示例、自动化练习与即时反馈功能。负责前端 UI
                与交互实现，联动后端智能接口。
              </p>
              <p class="project-desc">成果：校赛晋级，聚焦 AI+教育创新</p>
            </div>

            <div class="project-item">
              <h3>ElevatorPro —— 电梯系统设计与优化后台管理</h3>
              <p class="project-tech">
                2025.03 - 2025.04 · 角色：后台管理开发 · 技术栈：Vue2 + Flask + MySQL
              </p>
              <p class="project-desc">
                为苏州品诺电梯开发校企合作后台管理系统并投入生产，负责全链路开发：前端界面、后端 API
                与数据库设计与优化。
              </p>
              <p class="project-desc">
                主要成果：实现参数化配置中心与版本管理，减少人工错误率约
                60%；通过查询优化与缓存策略支持 500 并发用户。
              </p>
            </div>

            <div class="project-item">
              <h3>虚苑万象 —— 基于 XR 的古风园林游览</h3>
              <p class="project-tech">
                2025.05 - 2025.06 · 角色：负责人 + Unity VR 开发 · 技术栈：Unity3D + VR + C#
              </p>
              <p class="project-desc">
                基于 Unity 与 Pico Neo 3
                开发高沉浸式古风园林交互体验，负责核心交互、渲染优化与场景资源管理。
              </p>
              <p class="project-desc">
                主要成果：在移动端 VR 设备稳定 60FPS，内存占用降低 40%；项目入围校赛，提升沉浸体验。
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
                专注于前端与图形学方向，参与多个实际项目开发，具备良好的工程实践能力。
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
            <span class="interest-tag">开源贡献</span>
            <span class="interest-tag">技术分享</span>
            <span class="interest-tag">模型建模</span>
            <span class="interest-tag">游戏开发</span>
          </div>
        </section>

        <!-- 操作按钮 -->
        <div class="action-buttons">
          <button class="btn btn-primary" @click="goHome">返回主页</button>
          <button class="btn btn-secondary" @click="showContactModal = true">联系我</button>
        </div>
      </div>
    </div>

    <!-- 联系我弹窗组件 -->
    <ContactModal v-model="showContactModal" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { transitionName, canTransition, recordTransition } from '@/utils/transition'
import ContactModal from './ContactModal.vue'

const router = useRouter()
const navigated = ref(false)
const showContactModal = ref(false)

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
  height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding: 80px 20px 120px;
  box-sizing: border-box;
}

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

.details-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: -0.5px;
}

.details-content {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 50px 40px;
  backdrop-filter: blur(10px) saturate(120%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

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

.last-section {
  margin-bottom: 40px;
}

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
