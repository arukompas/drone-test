<template>
    <div id="auth-page">
        <form class="form-auth" @submit.prevent="register">
            <div class="text-center mb-4">
                <img class="mb-4" src="/images/laravel-logo.png" alt="" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Register</h1>
            </div>

            <div class="alert alert-danger" v-if="error" v-text="error"></div>

            <div class="form-label-group">
                <input v-model="name" type="name" id="inputName" class="form-control" :class="{'is-invalid': hasError('name')}" @input="clearError('name')" placeholder="Your name" required autofocus>
                <label for="inputName">Name</label>
                <span class="invalid-feedback" v-if="hasError('name')" v-text="getError('name')"></span>
            </div>

            <div class="form-label-group">
                <input v-model="email" type="email" id="inputEmail" class="form-control" :class="{'is-invalid': hasError('email')}" @input="clearError('email')" placeholder="Email address" required>
                <label for="inputEmail">Email address</label>
                <span class="invalid-feedback" v-if="hasError('email')" v-text="getError('email')"></span>
            </div>

            <div class="form-label-group">
                <input v-model="password" type="password" id="inputPassword" class="form-control" :class="{'is-invalid': hasError('password')}" @input="clearError('password')" placeholder="Password" required>
                <label for="inputPassword">Password</label>
                <span class="invalid-feedback" v-if="hasError('password')" v-text="getError('password')"></span>
            </div>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            <router-link tag="button" class="btn btn-lg btn-default btn-block mt-4" to="/login">Sign In</router-link>
            <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
        </form>
    </div>
</template>

<script>
import AuthForm from './AuthForm.vue';

export default {
    extends: AuthForm,

    data() {
        return {
            name: '',
            error: null,
            errors: {},
        }
    },

    methods: {
        register() {
            this.error = null;
            this.errors = {};

            var vm = this;

            this.$auth.register({
                data: {
                    name: vm.name,
                    email: vm.email,
                    password: vm.password
                },
                success() {},
                error(error) {
                    if (error.response.status !== 422) {
                        vm.error = "Oops! Something went wrong.";
                    } else {
                        vm.errors = error.response.data.errors;
                    }
                },
                autoLogin: true,
                redirect: '/dashboard'
            });
        },

        hasError(field) {
            return this.errors && this.errors[field] && this.errors[field][0];
        },

        getError(field) {
            if (this.hasError(field)) {
                return this.errors[field][0];
            }

            return null;
        },

        clearError(field) {
            if (this.errors[field]) {
                delete this.errors[field];
            }
        }
    }
};
</script>