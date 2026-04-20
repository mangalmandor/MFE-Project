const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
    const customConfig = singleSpaAngularWebpack(config, options);
    customConfig.output.libraryTarget = 'system'; // Host App ko yahi format chahiye
    return customConfig;
};