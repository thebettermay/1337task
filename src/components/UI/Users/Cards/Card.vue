<template>
    <v-card flat width="150px" style="margin: 0">
        <v-list-item-avatar size="150" tile style="border-radius: 0">
          <v-img :src="avatar" contain></v-img>
        </v-list-item-avatar>
        <v-list two-line>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="align_left" text-start>
                <b>{{user.name}}</b></v-list-item-title>
              <v-list-item-subtitle class="align_left">
                <b>Office:</b>{{user.office}}</v-list-item-subtitle>
              <v-container>
                <networks-row></networks-row>
              </v-container>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import NetworksRow from './Partials/NetworksRow.vue';

export default Vue.extend({
  components: { NetworksRow },
  props: ['user'],
  data() {
    return {
      avatarUrl: '@/assets/no-avatar.png',
    };
  },
  computed: {
    avatar(): string {
      return this.user.imagePortraitUrl ? this.user.imagePortraitUrl : this.avatarUrl;
    },
  },
});
</script>
<style lang="scss">
.align_left {
  text-align: left;
}
</style>
