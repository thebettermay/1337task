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
    ...mapGetters(['GET_USERS']),
  },
  methods: {
    ...mapActions(['FETCH_USERS']),
  },
  async created() {
    await this.FETCH_USERS();
    console.log(this.GET_USERS);
  },
});
</script>
