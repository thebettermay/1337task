<template lang="html">
  <v-flex class="my-auto mx-auto text-center" height=100>
    <v-alert text color="teal">  <h1 color="teal">{{error.code}}</h1>
      <p>{{error.message}}</p> </v-alert>
  </v-flex>
</template>

<script>
export default {
  props: ['error'],
};
</script>
