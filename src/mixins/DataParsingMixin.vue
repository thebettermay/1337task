<script lang="ts">
/* eslint-disable global-require */
import { UserEntity } from '@/types/store/user';
import { socialNetworks } from '@/types/components/DetailCard/socialNetworks';
import Vue, { PropType } from 'vue';

export default Vue.extend({
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

    office(): string {
      return this.user.office ? this.user.office : '-';
    },
    socialNetworks(): socialNetworks {
      const { gitHub, linkedIn, twitter } = this.user;
      const networkUrls: socialNetworks = [
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

      const networksGenerator = (networks: socialNetworks) =>
        networks.filter((el) => el.link !== null);
      return networksGenerator(networkUrls);
    },
  },
});
</script>
