<template>
  <v-card class="card" hover @click.stop="showInfo()">
    <detail-card
      :user="user"
      v-if="showDetail"
      @showInfo="showDetail = !showDetail"
    >
      {{ showDetail }}</detail-card
    >
    <v-container pa-0>
      <v-row no-gutters>
        <v-col align="center">
          <v-list-item-avatar :size="avatarSize" class="ma-0 mt-1">
            <v-img :src="avatar" contain></v-img>
          </v-list-item-avatar>
        </v-col>
        <v-col class="px-2">
          <v-list two-line>
            <v-list-item class="px-0">
              <v-list-item-content>
                <v-list-item-title class="align_left" text-start>
                  <b>{{ user.name }}</b></v-list-item-title
                >
                <v-list-item-subtitle class="align_left">
                  <b>Office: </b>{{ office }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import DetailCard from '@/components/UI/Users/Cards/Partials/DetailCard.vue';
import DataParsingMixin from '@/mixins/DataParsingMixin.vue';
import { UserEntity } from '@/types/store/user';

export default Vue.extend({
  components: { DetailCard },
  mixins: [DataParsingMixin],
  props: {
    user: {
      type: Object as PropType<UserEntity>,
    },
  },
  data() {
    return {
      // eslint-disable-next-line global-require
      avatarUrl: require('@/assets/no-avatar.png'),
      showDetail: false,
    };
  },
  methods: {
    showInfo() {
      this.showDetail = true;
    },
  },
  computed: {
    avatarSize() {
      // eslint-disable-next-line default-case
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 110;
        default:
          return 120;
      }
    },
  },
});
</script>
<style lang="scss">
@import '@/sass/layout.scss';
.align_left {
  text-align: left;
}
.card {
  margin: 0;
  width: 170px;
}
</style>
