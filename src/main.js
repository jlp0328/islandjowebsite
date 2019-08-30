// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("typeface-aleo");

import DefaultLayout from "~/layouts/Default.vue";
import IslandJoLayout from "~/layouts/Main.vue";
import VueMq from "vue-mq";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("Main", IslandJoLayout);
  Vue.use(VueMq, {
    breakpoints: {
      mobile: 450,
      tablet: 900,
      laptop: 1250,
      desktop: Infinity
    }
  });
}
