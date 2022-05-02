<template>
  <v-row>
      <v-col>
          asdas
      </v-col>
      <v-col>
      </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import getUsers from '@/api/index';

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
