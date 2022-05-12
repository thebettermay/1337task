<template>
  <v-footer app padless dark class="secondary">
    <v-col class="text-right footer" cy-data="date">
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
  },
};
</script>

<style lang="css" scoped>
.footer {
  font-family: monospace;
}
.copyright {
  width: 30px;
}
</style>
