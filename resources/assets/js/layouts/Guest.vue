<template>
    <div class="master-container">
        <top-nav></top-nav>

        <router-view></router-view>
    </div>
</template>

<script>
import TopNav from './components/TopNavGuest.vue';

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

.master-container {
    height: 100%;
}
</style>

