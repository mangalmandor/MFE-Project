const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:4202/',

  // 🌟 YAHAN CHANGE HAI: Object ki jagah Function use kiya hai taaki override ho sake
  configureWebpack: (config) => {
    config.output.libraryTarget = 'system';
    config.output.filename = 'js/app.js';
    config.output.chunkFilename = 'js/[name].js';

    config.optimization = { splitChunks: false };

    // Sirf 'single-spa' external rahega, baaki sab (Vue, single-spa-vue) bundle hoga
    config.externals = ['single-spa'];

    config.plugins.push(
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
      })
    );
  },

  devServer: {
    port: 4202,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: 'all'
  }
})