<template>
  <v-overlay light opacity="0.5">
    <v-container fill-height>
      <v-row align-center justify="center">
        <v-card class="card ma-0" hover v-click-outside="onClickOutside">
          <v-col class="pa-0" justify-self="right">
            <v-btn
              color="red"
              icon
              small
              @click.stop="toggle()"
              align-self="end"
            >
              <v-icon v-text="'mdi-close'"></v-icon>
            </v-btn>
          </v-col>
          <v-container pa-0>
            <v-row no-gutters>
              <v-col align="center">
                <v-list-item-avatar
                  :size="avatarSize"
                  class="ma-0 pa-0"
                  tile
                  style="border-radius: 0"
                >
                  <v-img :src="avatar" contain></v-img>
                </v-list-item-avatar>
              </v-col>
              <v-col class="px-5">
                <v-list two-line>
                  <v-list-item class="px-0">
                    <v-list-item-content>
                      <v-list-item-title class="align_left mb-2" text-start>
                        <b>{{ user.name }}</b></v-list-item-title
                      >
                      <v-list-item-subtitle class="align_left mb-1">
                        <b>Office: </b>{{ user.office }}</v-list-item-subtitle
                      >
                      <v-tooltip
                        bottom
                        open-delay="150"
                        class="mx-4"
                        v-if="mainText !== '-'"
                        max-width=" 400px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-list-item-subtitle
                            class="align_left mb-1"
                            v-on="on"
                          >
                            <b>About: </b>{{ mainText }}</v-list-item-subtitle
                          >
                        </template>
                        <span>{{ mainText }}</span>
                      </v-tooltip>

                      <v-list-item-subtitle class="align_left">
                        <b>Phone: </b
                        ><span color="teal">{{
                          phoneNumber
                        }}</span></v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <networks-row :links="socialNetworks" />
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-row>
    </v-container>
  </v-overlay>
</template>

<script lang="ts">
/* eslint-disable global-require */
import { UserEntity } from '@/types/user';
import Vue, { PropType } from 'vue';
import NetworksRow from './NetworksRow.vue';
export default Vue.extend({
  components: { NetworksRow },
  props: {
    user: {
      type: Object as PropType<UserEntity>,
    },
  },
  data() {
    return {
      // eslint-disable-next-line global-require
      avatarUrl: require('@/assets/no-avatar.png'),
    };
  },

  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toggle() {
      this.$emit('showInfo');
    },

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onClickOutside() {
      this.$emit('showInfo');
    },
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    avatarSize(): number {
      // eslint-disable-next-line default-case
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 250;
        default:
          return 400;
      }
    },
    avatar(): string {
      return this.user.imagePortraitUrl
        ? this.user.imagePortraitUrl
        : this.avatarUrl;
    },

    mainText(): string {
      if (this.user.mainText) {
        return this.user.mainText.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, '\n');
      }
      return '-';
    },
    phoneNumber(): string {
      return this.user.phoneNumber ? this.user.phoneNumber : '-';
    },
    socialNetworks(): { link: string | null; icon: string; to: string }[] {
      const { gitHub, linkedIn, twitter } = this.user;
      const networkUrls: { link: string | null; icon: string; to: string }[] = [
        {
          link: gitHub,
          icon: require('@/assets/github_logo.png'),
          to: `github.com/${gitHub}`,
        },
        {
          link: linkedIn,
          icon: require('@/assets/linkedin_logo.png'),
          to: `linkedin.com${linkedIn}`,
        },
        {
          link: twitter,
          icon: require('@/assets/twitter_logo.png'),
          to: `twitter.com/${twitter}`,
        },
      ];

      const networksGenerator = (
        networks: { link: string | null; icon: string; to: string }[]
      ) => networks.filter((el) => el.link !== null);
      return networksGenerator(networkUrls);
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 400px;
}
@media (max-width: 425px) {
  .card {
    width: 350px;
  }
}
@media (max-width: 375px) {
  .card {
    width: 300px;
  }
}
</style>
