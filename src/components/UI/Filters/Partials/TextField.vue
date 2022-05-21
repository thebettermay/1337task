<template>
  <v-text-field
    style="max-width: 150px; padding: 0; margin-right: 10px"
    :label="title"
    hide-details
    @keyup="filterByParam($event, title.toLowerCase())"
  >
  </v-text-field>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  props: ['title'],
  methods: {
    ...mapActions(['FILTER_BY_PARAM', 'SORT_BY_PARAM', 'FILTER_USERS']),
    filterByParam(event: Event, type: string) {
      this.retrieveValue(event, type);
    },
    retrieveValue(event: Event, type: string) {
      const target = <HTMLInputElement>event.target;
      const fieldData = {
        [type]: target.value,
      };
      this.$emit('updateData', fieldData);
      // this.FILTER_BY_PARAM(fieldData);
    },
  },
});
</script>
<style scoped lang="css">
</style>
