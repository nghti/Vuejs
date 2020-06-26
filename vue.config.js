const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '#': path.resolve(__dirname, 'src/'),
      },
    },
  },
  // devServer: {
  //   host: 'vuejs.test',
  // },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#479ccf',
          'link-color': '#479ccf',
        },
        javascriptEnabled: true,
      },
    },
  },
  runtimeCompiler: false,
};
