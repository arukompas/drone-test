<template>
    <div class="master-container">
        <top-nav></top-nav>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TopNav from '../components/TopNav.vue';

export default {
    components: {
        TopNav,
    }
}
</script>

<style scoped>
.master-container {
    padding-top: 56px;
}

.master-container,
.master-container > .container {
    height: 100%;
}
</style>

