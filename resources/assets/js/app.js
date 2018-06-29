/**
 * Imports
 */

require('./bootstrap');
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './routes/router';
window.Vue = Vue;

/**
 * Set up
 */
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://laravel-spa.test';

Vue.router = router;

Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

Vue.component('top-nav', require('./layout/TopNav.vue'));
Vue.component('sidebar-nav', require('./layout/SidebarNav.vue'));

/**
 * Mount the app
 */

App.router = Vue.router;

const app = new Vue(App).$mount('#app');
