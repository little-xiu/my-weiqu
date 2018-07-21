import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home/index.vue";
// import Focus from "./views/Focus/index.vue";
Vue.use(Router);
const routes = [
	{
		name: "home",
   	path: "/home",
   	alias: "/",
   	component: Home
	},
	{
		path: "**",
		redirect: "/home"
	}
]
export default new Router({
  routes
})
