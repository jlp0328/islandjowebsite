const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/*.scss")]
    });
}

module.exports = {
  siteName: "Island Jo Coffee-n-Cafe",
  plugins: [
    {
      use: "gridsome-source-google-sheets",
      options: {
        sheetId: "1hnSgPEPzV3juRxuWB-melNUApKiNwM0wQyFOeqcfkIE",
        apiKey: "AIzaSyDbkx3KI-bBCI0aRVgbbRwC0p7tymDvcg4 "
      }
    },
    {
      use: "@zefman/gridsome-source-instagram",
      options: {
        username: "islandjo_oki", // Instagram username
        typeName: "InstagramPhoto" // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
      }
    }
  ],
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
