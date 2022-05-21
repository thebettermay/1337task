<template>
  <v-footer app padless dark class="secondary">
    <v-col :class="classes" cy-data="date">
      {{ getCurrentDate }} — Evgeniy Orekhov<span class="copyright"
        >&#169;</span
      >
    </v-col>
  </v-footer>
</template>

<script>
export default {
  computed: {
    getCurrentDate() {
      return new Date().getFullYear();
    },
    classes() {
      // eslint-disable-next-line default-case
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'text-right footer font-size-small';
        default:
          return 'text-right footer';
      }
    },
  },
};
</script>

<style lang="css" scoped>
.footer {
  font-family: monospace;
}
.font-size-small {
  font-size: 13px !important;
}
.copyright {
  width: 30px;
}
</style>
