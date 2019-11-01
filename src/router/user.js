import login from '../components/login.vue';
import recommend from '../components/mianView/recommend'

export default [
    {
        name:'login',
        path: '/user/login',
        component: login
    },
    {
        name:'register',
        path: '/user/register',
        component: login
    },
    {
        name:'mainview',
        path: '/',
        redirect: '/recommend'
    },
    {
        name:'recommend',
        path: '/recommend',
        component: recommend
    }
]