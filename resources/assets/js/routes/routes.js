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
            }
        ]
    },
    {
        path: '/404',
        component: require('../views/404.vue'),
    },
    {
        path: '*',
        redirect: '/404'
    }
];

export default routes;