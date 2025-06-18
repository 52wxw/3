<!-- 改造后的 ArticleCard.vue -->
<template>
  <div class="post-card">
    <img :src="cover" class="post-cover" />
    <div class="card-content">
      <div class="header-row">
        <h3>{{ title }}</h3>
        <span class="read-time">{{ readTime }}分钟阅读</span>
      </div>
      <p class="excerpt">{{ excerpt }}</p>
      <button class="read-btn">阅读更多</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-card {
  display: grid;
  grid-template-rows: 180px auto; /* 封面定高，内容自适应 */
  gap: 12px;
  padding: 16px;
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }

  .post-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }

  .card-content {
    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 8px;

      h3 {
        font-size: 1.1rem;
        color: #fff;
        margin: 0;
      }

      .read-time {
        font-size: 0.85rem;
        color: #888;
      }
    }

    .excerpt {
      color: #ccc;
      line-height: 1.5;
      margin: 0 0 12px;
    }

    .read-btn {
      background: #42b983; /* 荧光绿，呼应赛博风格 */
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
