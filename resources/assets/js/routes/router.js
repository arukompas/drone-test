import VueRouter from 'vue-router';

let routes = [
    {
        path: '/', name: 'home',
        component: require('../views/Index.vue')
    },
    {
        path: '/login', name: 'login',
        component: require('../views/auth/Login.vue')
    },
    {
        path: '/register', name: 'register',
        component: require('../views/auth/Register.vue')
    },
    {
        path: '/dashboard', name: 'dashboard',
        component: require('../views/Dashboard.vue'),
        meta: {
            auth: true
        }
    },
    {
        path: '/orders', name: 'orders',
        component: require('../views/Orders.vue'),
        meta: {
            auth: true
        }
    }
];

export default new VueRouter({
    routes: routes,
    linkActiveClass: 'active'
});