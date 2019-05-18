module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.hotReload = false
        return options
      })
  }
}
