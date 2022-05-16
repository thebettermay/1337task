<template lang="html">
<v-container fluid>
  <v-row  class='mx-0'>
    <v-col align-self="end" class="pa-0">

        <v-pagination
          class="justify-self-end"
          color="primary"
          total-visible="8"
          v-model="currentPage"
          :length="300"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          ></v-pagination>
    </v-col>

  </v-row>
  </v-container>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  props: ['count'],
  data() {
    return {
      currentPage: 1,
      toggleLimit: 0,
    };
  },
});
</script>
<style scoped>
</style>
