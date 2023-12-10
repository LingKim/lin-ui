/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    //测试jsx tsx组件
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
