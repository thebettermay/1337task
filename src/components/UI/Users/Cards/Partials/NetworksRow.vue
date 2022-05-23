<template>
  <v-row justify="end" style="margin-top: 5px; width: 10px; color: white">
    <a
      v-for="(link, i) in links"
      :key="i"
      :href="'//' + link.to"
      target="_blank"
    >
      <v-list-item-avatar size="30" class="mr-3 my-0 ml-0" contain>
        <v-img contain :src="link.icon"></v-img>
      </v-list-item-avatar>
    </a>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['links'],
});
</script>
<style lang="css">
.v-avatar {
  border-radius: 0;
}
</style>
