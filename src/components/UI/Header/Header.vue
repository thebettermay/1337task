<template lang="html">
  <v-app-bar
  class="header"
  dark
  app
  >
    <v-toolbar-title  :class="classes" cy-data="title" style="color: #00BFA5">
      The fellowship of the tretton37
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  computed: {
    classes() {
      // eslint-disable-next-line default-case
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'text-left ml-0 h1 font-size-small';
        default:
          return 'text-left ml-8 h1';
      }
    },
  },
});
</script>
<style lang="scss">
@import '@/sass/_variables.scss';
.font-size-small {
  font-size: 15px !important;
}
// .header {
//   height: topHeaderHeight;
//   font-family: monospace;
// }
</style>
