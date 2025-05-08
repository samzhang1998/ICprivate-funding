import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://3.25.246.57",
        changeOrigin: true,
        // secure: false,  // 如果是https接口，需要配置这个参数
      },
    },
    cors: true,
  },
});
