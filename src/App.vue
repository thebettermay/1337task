<template>
  <v-app>
    <div id="main-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Main from './views/Main.vue';
import Footer from './components/UI/Footer/Footer.vue';
import Header from './components/UI/Header/Header.vue';

export default Vue.extend({
  components: { Main, Footer, Header },
});
</script>

<style lang="scss">
@import '@/sass/layout.scss';
</style>
