import Vue from "vue";
import App from "./App.vue";
import Pages from "./pages/index";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: Pages,
}).$mount("#app");
