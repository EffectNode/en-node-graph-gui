module.exports = {
  runtimeCompiler: true,

  pages: {
    index: {
      // entry for the page
      entry: 'src/index/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    sandbox: {
      // entry for the page
      entry: 'src/sandbox.js',
      // the source template
      template: 'public/sandbox.html',
      // output as dist/index.html
      filename: 'sandbox.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Sandbox Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['sandbox']
    }
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
