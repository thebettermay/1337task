<template>
  <v-container>
    <slot name="content"></slot>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  methods: {
    ...mapActions(['FETCH_USERS']),
  },
  async created() {
    await this.FETCH_USERS();
  },
});
</script>
