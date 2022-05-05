<template>
<v-footer app
  padless
  dark
  class='secondary'>
<v-spacer></v-spacer>
  <v-col class="text-center"
    cy-data="date"
    cols="2">
    {{ getCurrentDate }} — Evgeniy Orekhov
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
</style>
