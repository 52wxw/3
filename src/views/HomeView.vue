<template>
  <div class="layout-wrapper">
    <NavBar class="nav-panel" />
    <div class="main-panel">
      <section class="content-area">
        <ArticleCard 
          icon="@/assets/icon1.png" 
          title="Aarch_arm" 
          link="https://192.168.4.10:8006"
        />
        <ArticleCard 
          icon="@/assets/icon2.png" 
          title="Amd_x86" 
          link="https://192.168.4.13:8006" 
        />
        <ArticleCard 
          icon="@/assets/icon3.png" 
          title="FTP" 
          link="http://192.168.4.12/" 
        />
      </section>
      <SideBar class="sidebar-area" />
    </div>
  </div>
</template>

<script setup>
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
