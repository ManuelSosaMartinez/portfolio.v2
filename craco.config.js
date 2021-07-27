const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#722ed1",
              "@link-color": "#722ed1",
              "@success-color": "#ffc53d",
              "@warning-color": "#fadb14",
              "@error-color": "#f5222d",
              "@layout-header-background": "#22075e",
              "@layout-body-background": "#f9f0ff",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
