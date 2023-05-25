const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'all', // https://webpack.js.org/configuration/dev-server/#devserverallowedhosts
    ],
  },
});
