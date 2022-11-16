<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/b1.png" class="w-100 pcbanner" alt="banner">
                <img src="../assets/mobilebanner.jpg" class="w-100 mobilebanner" alt="banner">
            </div>
            <div class="carousel-item">
                <img src="../assets/b2.png" class="w-100 pcbanner" alt="banner">
                <img src="../assets/mobilebanner.jpg" class="w-100 mobilebanner" alt="banner">
            </div>
            <div class="carousel-item">
                <img src="../assets/b3.png" class="w-100 pcbanner" alt="banner">
                <img src="../assets/mobilebanner.jpg" class="w-100 mobilebanner" alt="banner">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</template>

<script>
    export default {
    name: 'NBABanner',
    }
</script>

<style>
    .pcbanner{
        display: block;
    }
    .mobilebanner{
        display: none;
    }
    @media(max-width:640px){
        .pcbanner{
            display: none;
        }
        .mobilebanner{
            display: block;
        }
    }
</style>