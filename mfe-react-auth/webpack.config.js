const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "react-auth",
    webpackConfigEnv,
    argv,
  });

  defaultConfig.externals = ["single-spa"];

  // 👇 THE FIX: Webpack ko raw ES Modules (export) banane se rokna 👇
  delete defaultConfig.output.module;

  if (defaultConfig.experiments) {
    defaultConfig.experiments.outputModule = false;
  }

  // Webpack ko strictly SystemJS format use karne ko bolna
  defaultConfig.output.libraryTarget = "system";

  return merge(defaultConfig, {
    // Agar humne pichli baar environment add kiya tha, toh use bhi safe side rakh lete hain
    output: {
      environment: {
        module: false,
      },
    },
  });
};