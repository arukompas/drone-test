<template>
    <nav class="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">
            <img src="/images/laravel-logo.png" height="30" class="d-inline-block align-top mr-2" alt="">
            Laravel
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
            <div class="navbar-nav ml-auto">
                <a class="nav-item nav-link active" href="#">
                    Home <span class="sr-only">(current)</span>
                </a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#">Pricing</a>
                <a class="nav-item nav-link disabled" href="#">Disabled</a>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarProfileLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="/images/default-user.png" alt="Default User image" class="profile-image mr-1">
                        {{ $auth.user() ? $auth.user().name : 'User' }}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarProfileLink">
                        <a class="dropdown-item" href="#"><i class="fa fa-user fa-fw mr-1"></i>Account</a>
                        <a class="dropdown-item" href="#"><i class="fa fa-cog fa-fw mr-1"></i>Settings</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-danger" href="#" @click.prevent="$auth.logout()"><i class="fa fa-power-off fa-fw mr-1"></i>Logout</a>
                    </div>
                </div>
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
