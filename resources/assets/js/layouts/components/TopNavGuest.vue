<template>
    <nav class="navbar navbar-expand-sm fixed-top navbar-light">
        <router-link to="/" class="navbar-brand">
            <img src="/images/laravel-logo.png" height="30" class="d-inline-block align-top mr-2" alt="">
            Laravel
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
            <div class="navbar-nav ml-auto">
                <router-link class="nav-item nav-link" to="/login">Sign In</router-link>
                <router-link class="nav-item nav-link" to="/register">Register</router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
img.profile-image {
    height: 22px;
    border-radius: 25%;
}
</style>
