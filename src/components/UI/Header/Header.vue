<template lang="html">
  <v-app-bar
  class="header"
  dark
  app
  >
    <v-toolbar-title  class="pl-5 ml-5" cy-data="title" style="color: #00BFA5">
      The fellowship of the tretton37
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({});
</script>
<style lang="scss">
@import '@/sass/layout.scss';
.header {
  height: topHeaderHeight;
}
</style>
