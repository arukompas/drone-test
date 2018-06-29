<template>
    <div class="container">
        <div class="row text-center">
            <h1>404 :(</h1>

            <p class="mt-5">Sorry, but the page you were looking for was not found.</p>

            <p class="mt-4">
                <button class="btn btn-lg btn-primary mr-4 py-1 px-4" @click="$router.go(-1)">
                    <i class="fa fa-arrow-left fa-fw mr-2"></i>
                    Go back
                </button>
                <router-link to="/" class="btn btn-lg btn-primary py-1 px-4" exact>
                    <i class="fa fa-home fa-fw mr-2"></i>
                    Go home
                </router-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container > .row {
    display: block;
}
</style>
