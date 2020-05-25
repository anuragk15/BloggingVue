import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import blogsBox from "./components/blogsBox.vue";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.component("blogs-box", blogsBox);
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = ""; //Enter your real time database link here!
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
