<template>
  <v-row>
      <v-col>
          asdas
      </v-col>
      <v-col>
          asda
      </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import getUsers from '@/api/index';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  async created() {
    const res = await getUsers();
    console.log(res);
  },
});
</script>
