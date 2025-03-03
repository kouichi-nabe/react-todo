import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 追加
  publicDir: resolve(__dirname, "public"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/react-todo/'
})
