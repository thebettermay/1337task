<template>
  <v-row justify="start" class="wrapper" cols="12">
    <v-col
      class="my-auto"
      align-self="start"
      v-for="(user, i) in users"
      :key="i"
    >
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
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
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
    /* eslint-disable no-return-assign */
    ...mapGetters(['GET_USERS', 'GET_FILTERED_USERS']),
    users() {
      return this.GET_FILTERED_USERS.length
        ? (this.users = this.GET_FILTERED_USERS)
        : (this.users = this.GET_USERS);
    },
  },
  watch: {
    GET_FILTERED_USERS: {
      immediate: true,
      async handler(newVal) {
        // console.log(newVal);
        // newVal.length
        //   ? (this.users = newVal)
        //   : (this.users = await this.GET_USERS);
        // // this.users = await this.GET_USERS;
        console.log(newVal);
      },
    },
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
