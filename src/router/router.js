import Router from 'vue-router';
import Vue from 'vue';
import user from './user';
import search from './search';
Vue.use(Router);

const routes = [
   ...user,
   ...search
]

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {//返回之前的原位置
      // savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {//如果路径中有哈希值，就采用锚点定位
        position.selector = to.hash
      }
      if (to.matched.some(m => m.meta.scrollToTop)) {//如果路由元信息中存在参数，对参数做进一步判断（此示例代表滚动到顶部）
        position.x = 0
        position.y = 0
      }
     //如果返回一个 falsy (假的值)，或者是一个空对象，那么不会发生滚动。
      return position
    }
  }

const router = new Router({
    mode:'history',
    routes:routes,
    scrollBehavior
});

export default router;