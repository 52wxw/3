<template>
  <div class="sidebar">
    <!-- 头像区域 -->
    <div class="profile">
      <img src="@/assets/avatar.png" class="avatar" />
      <div class="nickname">玫瑰上的海盗船</div>
      <div class="subtitle">越想越迷糊</div>
    </div>
    <!-- 导航菜单 -->
    <nav class="nav-links">
      <a>首页</a>
      <a>推荐</a>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  width: 220px;          /* 固定宽度，保持侧边栏形态 */
  padding: 20px;
  background: rgba(255,255,255,0.1); /* 毛玻璃背景（可选） */
  backdrop-filter: blur(8px);         /* 毛玻璃效果（需兼容） */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);

  /* 核心：让高度由内容决定，而非占满屏幕 */
  height: fit-content;
  display: flex;
  flex-direction: column; /* 垂直排列子元素 */
  align-items: center;    /* 子元素水平居中 */
  gap: 16px;              /* 内部元素间距，替代margin */
}

/* 头像区域 */
.profile {
  text-align: center;
}
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.nickname {
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}
.subtitle {
  font-size: 12px;
  color: #ccc;
}

/* 导航菜单 */
.nav-links {
  width: 100%; /* 让链接填满侧边栏宽度 */
  display: flex;
  flex-direction: column;
  gap: 10px;   /* 链接之间的间距 */
}
.nav-links a {
  padding: 8px 12px;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;
}
.nav-links a:hover {
  background: rgba(255,255,255,0.2);
}
</style>

