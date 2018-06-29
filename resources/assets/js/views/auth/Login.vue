<template>
    <div id="auth-page">
        <form class="form-auth" @submit.prevent="login">
            <div class="text-center mb-4">
                <img class="mb-4" src="/images/laravel-logo.png" alt="" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
            </div>

            <div class="alert alert-danger" role="alert" v-if="error">
                {{ error.message }}
            </div>

            <div class="form-label-group">
                <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputEmail">Email address</label>
            </div>

            <div class="form-label-group">
                <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" v-model="rememberMe"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <router-link tag="button" class="btn btn-lg btn-default btn-block mt-4" to="/register">
                Register
            </router-link>
            <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
        </form>
    </div>
</template>

<script scoped>
import AuthForm from './AuthForm.vue';

export default {
    extends: AuthForm,

    data() {
        return {
            rememberMe: false,
        }
    },

    methods: {
        login() {
            this.error = null;

            var app = this;

            this.$auth.login({
                data: {
                    email: app.email,
                    password: app.password,
                },
                success() {},
                error(error) {
                    app.error = error.response.data;
                },
                rememberMe: app.rememberMe,
                redirect: '/dashboard',
                fetchUser: true
            });
        }
    }
}
</script>
