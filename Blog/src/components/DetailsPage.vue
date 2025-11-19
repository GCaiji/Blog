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
import '@/styles/DetailsPage.css'

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
