<template>
    <v-list-item-avatar size="20" style="margin: 0">
      <v-img
        contain
        :src="url"
      ></v-img>
    </v-list-item-avatar>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    url: {
      type: String,
    },
  },
});
</script>
<style lang="css">
.v-avatar {
  border-radius: 0;
}
</style>
