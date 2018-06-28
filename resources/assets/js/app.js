/**
 * Imports
 */

require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes/router';
window.Vue = Vue;

/**
 * Set up
 */

Vue.use(VueRouter);

/**
 * Mount the app
 */

const app = new Vue({
    el: '#app',
    router
});
