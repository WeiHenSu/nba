<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo-nba.svg">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon navbar-dark"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/index">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/teams">Teams</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/news">News</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
    name: 'NBANavbar',
    }
</script>
<style>
    .nbaNav{
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
    }
    .navbar-nav .nav-item > .nav-link{
        color: #fff;
        position: relative;
    }
    .navbar-nav .nav-item > .nav-link.active{
        color: #fff;
    }
    .navbar-nav .nav-item > .nav-link::after{
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 0%;
        height: 2px;
        background-color: #fff;
    }
    .navbar-nav .nav-item > .nav-link:hover:after{
        width: 100%;
        transition: 0.3s ease all;
    }
</style>