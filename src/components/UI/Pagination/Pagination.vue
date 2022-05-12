<template lang="html">
  <v-row  class='justify-space-between mx-0'>
    <v-col cols='4'>
      <div class="text-right">

        <v-pagination
          class="justify-self-end"
          color="primary"
          total-visible="8"
          v-model="currentPage"
          :length="300"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          ></v-pagination>

      </div>
    </v-col>

  </v-row>
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
