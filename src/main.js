import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appContent from "./components/appContent.vue";
import appHeader from "./components/appHeaderWrap.vue";
import appFooter from "./components/appFooter.vue";
Vue.config.productionTip = false
Vue.component("app-content",appContent);
Vue.component("app-header",appHeader);
Vue.component("app-footer",appFooter);
//引入并使用自己的插件
import myBundle from './my-boudle';
Vue.use(myBundle);

new Vue({
	el: "#app",
  router,
  store,
  components: {
  	App
  },
  render: h => h(App)
})
