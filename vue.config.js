const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,
  // 开启代理服务器(单个代理服务器)
  /* devServer: {
    proxy: 'http://localhost:5051'
  } */
  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:5051',
        ws: true, //用于websocket
        changeOrigin: false, //用于控制请求头中的host值
        pathRewrite: { '^/api1': '' }
      },
      '/api2': {
        target: 'http://localhost:5001',
        ws: true, //用于websocket
        changeOrigin: false, //用于控制请求头中的host值
        pathRewrite: { '^/api2': '' }
      },
    }
  }
})
