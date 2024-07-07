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
})
