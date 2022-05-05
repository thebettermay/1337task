<template>
    <v-row justify="center">
      <v-col class="my-auto" align="center" v-for="(user, i) in users"
      :key="i">
        <component
        :is="getComponent()"
        :user="user"></component>
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
    ...mapGetters(['GET_USERS']),
  },
  watch: {
    GET_USERS: {
      immediate: true,
      handler(newVal) {
        this.users = newVal;
      },
    },
  },
  async created() {
    this.users = await this.GET_USERS;
  },
});
</script>
<style lang="scss">
  .card-content {
    margin: 0px;
  }
</style>
