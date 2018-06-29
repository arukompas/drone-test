<template>
    <div id="auth-page">
        <form class="form-auth" @submit.prevent="register" v-show="!success">
            <div class="text-center mb-4">
                <img class="mb-4" src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Register</h1>
            </div>

            <div class="form-label-group">
                <input v-model="name" type="name" id="inputName" class="form-control" placeholder="Your name" required autofocus>
                <label for="inputName">Name</label>
            </div>

            <div class="form-label-group">
                <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
                <label for="inputEmail">Email address</label>
            </div>

            <div class="form-label-group">
                <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Password</label>
            </div>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            <router-link tag="button" class="btn btn-lg btn-default btn-block mt-4" to="/login">Sign In</router-link>
            <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
        </form>

        <div v-show="success" class="form-auth">
            <div class="text-center mb-4">
                <img class="mb-4" src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Welcome</h1>

                <p>Registration successful. You can now sign in.</p>

                <router-link tag="button" class="btn btn-lg btn-primary btn-block mt-4" to="/login">Sign In</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import AuthForm from './AuthForm.vue';

export default {
    extends: AuthForm,

    data() {
        return {
            name: '',
        }
    },

    methods: {
        register() {
            var vm = this;

            this.$auth.register({
                data: {
                    name: vm.name,
                    email: vm.email,
                    password: vm.password
                },
                success() {
                    vm.success = true;
                },
                error(response) {
                    vm.error = true;
                    vm.errors = response.response.data.errors;
                },
                autoLogin: true,
                redirect: '/dashboard'
            });
        }
    }
};
</script>