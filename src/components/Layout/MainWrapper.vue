<template>
  <v-container>
    <slot name="content"></slot>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import FetcherMixin from '@/mixins/FetcherMixin.vue';

export default Vue.extend({
  mixins: [FetcherMixin],
});
</script>
