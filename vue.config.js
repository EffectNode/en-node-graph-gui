module.exports = {
  runtimeCompiler: true,

  pages: {
    index: 'src/main.js',
    sandbox: 'src/sandbox.js'
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // console.log(config.output)
      config.output.filename = (chunkData) => {
        return chunkData.chunk.name === 'sandbox' ? '[name].js' : 'js/[name].[contenthash:8].js'
      }
    } else {
      // mutate for development...
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap(options => {
  //       options.hotReload = false
  //       return options
  //     })
  // }
}
