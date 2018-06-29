<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <div class="nav flex-column">
                <router-link class="nav-link" to="/dashboard">
                    <i class="fa fa-home fa-fw mr-1"></i>
                    Dashboard
                </router-link>
                <router-link class="nav-link" to="/orders">
                    <i class="fa fa-file fa-fw mr-1"></i>
                    Orders
                </router-link>
                <router-link class="nav-link" to="/products">
                    <i class="fa fa-shopping-basket fa-fw mr-1"></i>
                    Products
                </router-link>
                <router-link class="nav-link" to="/customers">
                    <i class="fa fa-user fa-fw mr-1"></i>
                    Customers
                </router-link>
                <router-link class="nav-link" to="/reports">
                    <i class="fa fa-chart-pie fa-fw mr-1"></i>
                    Reports
                </router-link>
                <router-link class="nav-link" to="/reports">
                    <i class="fa fa-cogs fa-fw mr-1"></i>
                    Integrations
                </router-link>
            </div>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a class="d-flex align-items-center text-muted" href="#">
                    <i class="fa fa-plus-circle fa-fw mr-1"></i> 
                </a>
            </h6>
            <div class="nav flex-column mb-2">
                <router-link class="nav-link" to="/reports/current-month">
                    <i class="fa fa-chart-pie fa-fw mr-1"></i>
                    Current Month
                </router-link>
                <router-link class="nav-link" to="/reports/last-quarter">
                    <i class="fa fa-chart-pie fa-fw mr-1"></i>
                    Last Quarter
                </router-link>
                <router-link class="nav-link" to="/reports/social-engagement">
                    <i class="fa fa-chart-pie fa-fw mr-1"></i>
                    Social Engagement
                </router-link>
                <router-link class="nav-link" to="/reports/year-end-sale">
                    <i class="fa fa-chart-pie fa-fw mr-1"></i>
                    Year-end sale
                </router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/*
 * Sidebar
 */

.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    /* Behind the navbar */
    padding: 60px 0 0;
    /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto;
    /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
        position: -webkit-sticky;
        position: sticky;
    }
}

.sidebar .nav-link {
    font-weight: 500;
    color: #333;
}

.sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
}

.sidebar .nav-link.active {
    color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
    color: inherit;
}

.sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
}
</style>
