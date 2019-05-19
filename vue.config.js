module.exports = {
  runtimeCompiler: true,

  pages: {
    index: 'src/main.js'// ,
    // sandbox: 'src/sandbox.js'
  }// ,
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     config.output.filename = (chunkData) => {
  //       console.log(chunkData.chunk.name)
  //       if (chunkData.chunk.name === 'sandbox') {
  //         return '[name].js'
  //       } else if (chunkData.chunk.name === 'chunk-vendors') {
  //         return '[name].js'
  //       } else {
  //         return 'js/[name].[contenthash:8].js'
  //       }
  //     }
  //   } else {
  //     // mutate for development...
  //   }
  // },
  // chainWebpack: config => {
  // }
}
