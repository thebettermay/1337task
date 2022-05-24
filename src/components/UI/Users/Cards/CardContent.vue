<template>
  <v-container>
    <v-row class="wrapper mx-0" justify="start" v-if="users">
      <v-col
        class="card col-sm-3 col-md-2"
        align-self="start"
        cols="6"
        v-for="(user, i) in users"
        :key="i"
      >
        <component :is="getComponent()" :user="user"></component>
      </v-col>
    </v-row>
    <Error :error="error" v-if="!users.length && error.code !== ''" />
    <v-flex
      v-if="!users.length && GET_DATA_STATUS"
      class="my-auto mx-auto text-center"
    >
      <v-alert text color="teal"> <p>No data</p> </v-alert>
    </v-flex>
    <v-row> </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Card from '@/components/UI/Users/Cards/Card.vue';
import Error from '@/components/UI/Users/Cards/Partials/Error.vue';
import { pagination } from '@/types/store/pagination';

export default Vue.extend({
  /* eslint-disable vue/return-in-computed-property */
  /* eslint-disable vue/no-side-effects-in-computed-properties */
  components: { Card, Error },
  props: ['type'],
  data() {
    return {
      userName: '',
      dataLoaded: false,
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
    /* eslint-disable no-return-assign */
    ...mapGetters([
      'GET_USERS',
      'GET_ERRORS',
      'GET_PAGINATION',
      'GET_DATA_STATUS',
    ]),
    users: {
      get() {
        const { from, to } = this.GET_PAGINATION;
        return this.GET_USERS.slice(from, to);
      },
      set(val: pagination) {
        const { from, to } = val;
        return this.GET_USERS.slice(from, to);
      },
    },
    error() {
      return this.GET_ERRORS;
    },
  },
  watch: {
    GET_PAGINATION: {
      immediate: true,
      handler(val: pagination) {
        this.users = val;
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
  overflow-y: auto;
}
.card {
  width: 170px;
}
</style>
