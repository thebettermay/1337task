<template>
  <v-container fluid class="wrapper-gen">
    <slot name="content"></slot>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
<style lang="scss" scoped>
// .wrapper-gen {
//   overflow-y: auto;
// }
</style>
