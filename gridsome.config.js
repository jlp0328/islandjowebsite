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
        sheetId: process.env.ISLAND_JO_MENU_SHEET,
        apiKey: process.env.GOOGLE_API_KEY,
        type: "Menu"
      }
    },
    {
      use: "gridsome-source-google-sheets",
      options: {
        sheetId: process.env.ISLAND_JO_GALLERY_SHEET,
        apiKey: process.env.GOOGLE_API_KEY,
        type: "Gallery"
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
