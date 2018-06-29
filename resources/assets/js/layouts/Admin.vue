<template>
    <div>
        <top-nav></top-nav>

        <div class="container-fluid">
            <div class="row">
                <sidebar-nav></sidebar-nav>
                <main role="main" class="bg-light col-md-9 ml-sm-auto col-lg-10 px-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>    
    </div>    
</template>

<script>
import TopNav from './components/TopNavAdmin.vue';
import SidebarNav from './components/SidebarNav.vue';

export default {
    components: {
        TopNav,
        SidebarNav
    }
}
</script>

<style scoped>
[role="main"] {
    padding-top: 60px;
    /* Space for fixed navbar */
}
</style>
