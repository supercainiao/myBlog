import Router from 'vue-router';
import Vue from 'vue';
import user from './user';
Vue.use(Router);

const routes = [
   ...user
]

const router = new Router({
    mode:'history',
    routes:routes
});

export default router;