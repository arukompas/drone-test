<template>
    <div id="login-page">
        <form class="form-signin" @submit.prevent="login">
            <div class="text-center mb-4">
                <img class="mb-4" src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
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
export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
            rememberMe: false,
        }
    },

    methods: {
        login() {
            var app = this;

            this.$auth.login({
                params: {
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

<style scoped>

#login-page {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
}

#login-page {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.form-signin {
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: auto;
}

.form-label-group {
    position: relative;
    margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>label {
    padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0;
    /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
    color: transparent;
}

.form-label-group input:-ms-input-placeholder {
    color: transparent;
}

.form-label-group input::-ms-input-placeholder {
    color: transparent;
}

.form-label-group input::-moz-placeholder {
    color: transparent;
}

.form-label-group input::placeholder {
    color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
    padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
    padding-top: calc(var(--input-padding-y) / 3);
    padding-bottom: calc(var(--input-padding-y) / 3);
    font-size: 12px;
    color: #777;
}
</style>

