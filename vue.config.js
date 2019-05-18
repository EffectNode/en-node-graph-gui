module.exports = {
  runtimeCompiler: true,
  pages: {
    index: 'src/main.js',
    sandbox: 'src/sandbox.js'
  },
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
