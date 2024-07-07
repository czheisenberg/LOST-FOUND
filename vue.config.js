// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { UndrawUiResolver } from 'undraw-ui/es/resolvers'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // 替换为你的后端服务器地址
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // 如果需要重写路径，可以配置此项
      },
    },
  },
  // plugins: [
  //   Components({
  //     resolvers: [UndrawUiResolver]
  //   }),
  // ],
})
