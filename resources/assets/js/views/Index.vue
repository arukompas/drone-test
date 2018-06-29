<template>
    <div id="index">
        <div class="img-container">
            <img src="/images/laravel-logo.png" alt="Laravel logo" height="100px">
            <i class="fa fa-plus fa-3x mx-5"></i>
            <img src="/images/vuejs-logo.png" alt="VueJS logo" height="100px">
        </div>
        <h1>Welcome to Laravel SPA!</h1>
        <p>Laravel + VueJS Single Page Application boilerplate</p>
    </div>
</template>

<style>
html, body, #index {
    height: 100%;
}

#index {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.img-container {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}
</style>
