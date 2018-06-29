<template>
    <div>
        <top-nav></top-nav>

        <div class="container-fluid">
            <div class="row">
                <sidebar-nav></sidebar-nav>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>    
    </div>    
</template>

<script>
import TopNav from './components/TopNavAdmin.vue';

export default {
    components: {
        TopNav
    }    
}
</script>

<style scoped>

</style>
