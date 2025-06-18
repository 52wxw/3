<template>
  <div class="layout-wrapper">
    <NavBar class="nav-panel" />
    <div class="main-panel">
      <section class="content-area">
        <div class="page-title">分类开源推荐下的文章</div>
        <ArticleCard 
          icon="@/assets/icon1.png" 
          title="LKY Office Tools-一键安装正版Office" 
          desc="LKY Office Tools是一款一键式工具，能够自动下载、安装、激活最新版Microsoft Office..." 
          time="2024年01月08日" 
        />
        <ArticleCard 
          icon="@/assets/icon2.png" 
          title="Dockge容器编排管理面板" 
          desc="Dockge是一款基于Docker、轻量级的容器编排管理工具，支持docker-compose.yaml可视化管理..." 
          time="2024年01月17日" 
        />
        <ArticleCard 
          icon="@/assets/icon3.png" 
          title="Telegram-bot-api-php-proxy项目" 
          desc="PHP proxy for Telegram Bot API一个简单的代理项目，稳定好用，通过这个项目可..." 
          time="2024年01月17日" 
        />
      </section>
      <SideBar class="sidebar-area" />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<style scoped lang="scss">
.layout-wrapper {
  display: flex;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  .nav-panel {
    margin-right: 20px;
  }
  .main-panel {
    flex: 1;
    display: flex;
    gap: 20px;
  }
  .content-area {
    flex: 1;
    .page-title {
      font-size: 18px;
      margin-bottom: 15px;
      color: #fff;
      font-weight: bold;
    }
  }
  .sidebar-area {
    width: 280px;
  }
}

@media (max-width: 768px) {
  .layout-wrapper, .main-panel {
    flex-direction: column;
  }
  .nav-panel, .sidebar-area {
    width: 100%;
    margin: 0 0 20px;
  }
}
</style>
