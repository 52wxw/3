<template>
  <div class="nav-panel glass-container">
    <div class="nav-header">
      <img src="@/assets/avatar.png" class="nav-avatar" />
      <div class="nav-info">
        <h2>玫瑰上的海盗船</h2>
        <!-- 打字机动画容器 -->
        <p class="typing-line">
          <span class="typing-text">越想越迷糊~~</span>
        </p>
      </div>
    </div>
    <ul class="nav-menu">
      <li>首页</li>
      <li>推荐</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.nav-panel {
  .nav-header {
    .nav-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .nav-info {
      h2 {
        font-size: 18px;
        color: #ff69b4; /* 昵称粉红色 */
        margin: 0 0 8px;
      }
      /* 打字机效果核心 */
      .typing-line {
        margin: 0;
        font-size: 14px;
        color: #ccc;

        .typing-text {
          display: inline-block;
          overflow: hidden;        /* 隐藏溢出文字 */
          white-space: nowrap;     /* 禁止换行 */
          border-right: 2px solid #fff; /* 模拟光标 */
          animation:
            typing 3s steps(7) infinite, /* 7个字符：越、想、越、迷、糊、~、~ */
            blink 0.7s step-end infinite; /* 光标闪烁 */
        }
      }
    }
  }
}

/* 逐字显示动画 */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* 光标闪烁动画 */
@keyframes blink {
  50% { border-right-color: transparent; }
}
</style>

