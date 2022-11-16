<template>
  <div id="app">
    <section class="index_Navbar">
      <NBANavbar />
    </section>
    <section class="index_Banner">
      <NBABanner />
    </section>
    <section class="index_Container">
      <div class="container">
        <router-view></router-view>
      </div>
      <div class="index_background"></div>
    </section>
    <section class="index_Footer">
      <NBAFooter />
    </section>
  </div>
</template>

<script>
import NBANavbar from './components/NBANavbar.vue'
import NBABanner from './components/NBABanner.vue'
import NBAFooter from './components/NBAFooter.vue'

export default {
  name: 'App',
  components: {
    NBANavbar,
    NBABanner,
    NBAFooter
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
    .index_background {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
    }
</style>
