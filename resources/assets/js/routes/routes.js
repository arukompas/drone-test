import app from '../app.js';

let routes = [
    {
        path: '/',
        component: require('../layouts/Guest.vue'),
        children: [
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
                path: '/404',
                component: require('../views/404.vue'),
            }
        ],
        beforeEnter(to, from, next) {
            // Redirect to the dashboard if already logged in
            if (app && app.$auth && app.$auth.check()) {
                app.$router.push('dashboard');
                return;
            }

            next();
        }
    },
    {
        path: '/admin',
        component: require('../layouts/Admin.vue'),
        meta: {
            auth: true,
        },
        children: [
            {
                path: '/dashboard', name: 'dashboard',
                component: require('../views/Dashboard.vue'),
            },
            {
                path: '/orders', name: 'orders',
                component: require('../views/Orders.vue'),
            }
        ]
    }
];

export default routes;