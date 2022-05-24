<template>
  <v-container fluid>
    <v-card :height="height">
      <slot name="content"></slot>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  /* eslint-disable vue/return-in-computed-property */
  computed: {
    // eslint-disable-next-line consistent-return
    height() {
      // eslint-disable-next-line default-case
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 130;
        case 'sm':
          return 130;
        case 'md':
          return 70;
        case 'lg':
          return 70;
        case 'xl':
          return 70;
      }
    },
  },
});
</script>
<style scoped>
</style>
