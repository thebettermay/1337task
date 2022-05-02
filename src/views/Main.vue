<template>
  <v-container class="home">
    <MainWrapper/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import MainWrapper from '@/components/Layout/MainWrapper.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    MainWrapper,
  },
});
</script>
