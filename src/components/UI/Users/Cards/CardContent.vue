<template>
  <v-container>
    <v-row class="wrapper mx-0 flex-row" v-if="users">
      <v-col class="my-auto mx-3 card" v-for="(user, i) in users" :key="i">
        <component :is="getComponent()" :user="user"></component>
      </v-col>
    </v-row>
    <Error :error="error" v-if="!users.length && error" />
    <v-row> </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Card from '@/components/UI/Users/Cards/Card.vue';
import Error from '@/components/UI/Users/Cards/Partials/Error.vue';

export default Vue.extend({
  /* eslint-disable vue/return-in-computed-property */
  /* eslint-disable vue/no-side-effects-in-computed-properties */
  components: { Card, Error },
  props: ['type'],
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
    ...mapGetters(['GET_USERS', 'GET_FILTERED_USERS', 'GET_ERRORS']),
    users() {
      return this.GET_FILTERED_USERS.length
        ? this.GET_FILTERED_USERS
        : this.GET_USERS;
    },
    error() {
      return this.GET_ERRORS;
    },
  },
});
</script>
<style lang="scss" scoped>
.card-content {
  margin: 0px;
}
.wrapper {
  max-height: 500px;
  overflow-y: auto;
}
.card {
  max-width: 170px;
}
</style>
