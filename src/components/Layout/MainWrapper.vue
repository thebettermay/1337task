<template>
  <v-container>
    <slot name="content"></slot>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters(['GET_USERS', 'GET_USER_BY_NAME']),
  },
  methods: {
    ...mapActions(['FETCH_USERS']),
    getUserByName(name: string) {
      console.log(this.GET_USER_BY_NAME(name));
    },
  },
  async created() {
    await this.FETCH_USERS();
    console.log(this.GET_USERS);
    await this.getUserByName('Agron Kabashi');
  },
});
</script>
