const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
// 👇 1. HTML plugin ko import karna zaroori hai
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "mfe";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true, // Yeh Webpack ko khud HTML banane se rokta hai
  });

  // 👇 2. SystemJS module fix (jo humne pehle kiya tha)
  delete defaultConfig.output.module;
  if (defaultConfig.experiments) {
    defaultConfig.experiments.outputModule = false;
  }
  defaultConfig.output.libraryTarget = "system";

  return merge(defaultConfig, {
    devServer: {
      historyApiFallback: true, // 404 URL errors rokne ke liye
      port: 9000
    },
    // 👇 3. Webpack ko batana ki hamari index.ejs file kahan hai
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};