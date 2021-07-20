const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  outputDir: `dist/${process.env.outputDir}`,
  publicPath: './',
  chainWebpack: config => {
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' })
    config.module
      .rule('svg')
      .uses.delete('file-loader')
    config.module
      .rule('svg')
      .include.add(path.resolve(__dirname, './src/common/svg'))
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 102400 }))

    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  },
  productionSourceMap: debug,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    externals: {
      AMap: 'AMap'
    }
  },
  devServer: {
    port: '8011',
    proxy: {
      '^/cockpit': {
        target: process.env.VUE_APP_ROOT_URL,
        changeOrigin: true,
        onProxyReq: function(proxyReq) {
          proxyReq.removeHeader('origin')
        }
      }
    }
  }
}
