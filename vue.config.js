const path = require('path');

const testing = process.env.VUE_APP_TESTING === 'testing';

module.exports = {
  filenameHashing: !testing,
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    public: 'localhost',
    disableHostCheck: true,
    hot: true,
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/sass/_variables.scss";',
      },
    },
  },
  // runtimeCompiler: true,
  lintOnSave: false,
  configureWebpack: {
    // для дебага
    // devtool: 'source-map',
    plugins: [
    ],
    // optimization: {
    //   splitChunks: {
    //     minSize: 10000,
    //     maxSize: 200000,
    //   },
    // },
    resolve: {
      alias: {
        vue$: path.resolve('./node_modules/vue/dist/vue.runtime.esm.js'),
      },
    },
  },
};
