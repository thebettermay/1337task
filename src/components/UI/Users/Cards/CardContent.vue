<template>
  <v-row justify="space-between" class="wrapper">
    <v-col class="my-auto" align="center" v-for="(user, i) in users" :key="i">
      <component :is="getComponent()" :user="user"></component>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Card from '@/components/UI/Users/Cards/Card.vue';

export default Vue.extend({
  /* eslint-disable vue/return-in-computed-property */
  /* eslint-disable vue/no-side-effects-in-computed-properties */
  components: { Card },
  props: ['type'],
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getComponent() {
      switch (this.type) {
        case 'card':
          return Card;
        default:
          return Card;
      }
    },
  },
  computed: {
    ...mapGetters(['GET_USERS', 'GET_FILTERED_USERS']),
  },
  watch: {
    // GET_FILTERED_USERS: {
    //   immediate: true,
    //   async handler(newVal) {
    //     console.log(newVal);
    //     newVal.length
    //       ? (this.users = newVal)
    //       : (this.users = await this.GET_USERS);
    //     // this.users = await this.GET_USERS;
    //     console.log(this.users);
    //   },
    // },
  },
  async created() {
    this.users = await this.GET_USERS;
    console.log(this.users);
  },
});
</script>
<style lang="scss" scoped>
.card-content {
  margin: 0px;
}
.wrapper {
  max-height: dynamicContentHeight;
}
</style>
