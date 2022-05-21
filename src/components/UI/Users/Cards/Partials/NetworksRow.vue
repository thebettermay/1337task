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
    <!-- <v-list-item-avatar size="20" style="margin: 0">
      <v-img
        contain
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      ></v-img>
    </v-list-item-avatar>
    <v-list-item-avatar size="20" style="margin: 0">
      <v-img
        contain
        src="https://logowik.com/content/uploads/images/761_twitter.jpg"
      ></v-img>
    </v-list-item-avatar> -->
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['links'],
  // data() {
  //   return {
  //     avatars: [
  //       require('@/assets/github_logo.png'),
  //       require('@/assets/linkedin_logo.png'),
  //       require('@/assets/twitter_logo.png'),
  //     ],
  //   };
  // },
  created() {
    console.log(this.links[0]);
  },
});
</script>
<style lang="css">
.v-avatar {
  border-radius: 0;
}
</style>
