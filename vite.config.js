import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: '0.0.0.0',
    port: 80,
    open: true
  },
  // 新增：明确指定入口文件
  build: {
    rollupOptions: {
      input: './src/main.js'  // 指向你的入口文件
    }
  }
})
