<template>
  <v-container fluid class="wrapper">
    <slot name="content"></slot>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
<style lang="scss" scoped>
.wrapper {
  max-height: dynamic_content_height;
}
</style>
