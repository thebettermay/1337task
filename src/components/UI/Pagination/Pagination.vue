<template lang="html">
<v-container fluid class="mt-3">
  <v-row  class='mx-0'>
    <v-col align-self="end" class="pa-0">
        <v-pagination
          class="justify-self-end"
          color="primary"
          total-visible="8"
          v-model="currentPage"
          :length="count"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          @input="changePage($event)"
          ></v-pagination>
    </v-col>

  </v-row>
  </v-container>
</template>
<script>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  data() {
    return {
      currentPage: 1,
      limit: 24,
    };
  },
  methods: {
    ...mapActions(['CHANGE_PAGINATION']),
    changePage(val) {
      this.currentPage = val;
      this.CHANGE_PAGINATION({
        currentPage: val,
        limit: this.limit,
      });
    },
  },
  computed: {
    ...mapGetters(['GET_USERS', 'GET_CURRENT_PAGE']),
    count() {
      return Math.ceil(this.GET_USERS.length / this.limit);
    },
  },
  watch: {
    GET_CURRENT_PAGE: {
      immediate: true,
      handler(val) {
        this.changePage(val);
      },
    },
  },
});
</script>
<style lang ="css" scoped>
@media (max-width: 320px) {
  /deep/ .v-pagination__item {
    display: none;
  }
  /deep/ .v-pagination__more {
    display: none;
  }
}
</style>
