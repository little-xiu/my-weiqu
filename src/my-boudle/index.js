import TabBar from './tabs/tabBar.vue'
import TabItem from './tabs/tabItem.vue'
export default {
  //外部引入该模块后，Vue.use()调用，install方法就执行。
  install(Vue){
    Vue.component(TabBar.name, TabBar);
    Vue.component(TabItem.name, TabItem);
  }
}