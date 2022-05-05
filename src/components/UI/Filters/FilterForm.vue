<template>
<v-container fluid class="mx-6">
<v-row mx-6 align="start">
  <v-col style="margin: 0 width: 100px">
    <div class="heading">Filter by:</div>
  </v-col>
  <v-col style="margin: 0; padding: 0">
    <v-text-field
    style="max-width: 150px; padding: 0"
    label="Name">{{name}}
    </v-text-field>
  </v-col>
  <v-col style="margin: 0;padding: 0">
    <v-text-field
    style="max-width: 150px; padding: 0"
    label="Office"></v-text-field>
  </v-col>
  <v-col style="margin: 0">
    <div class="heading">Sort by:</div>
  </v-col>
  <v-col style="margin: 0">
    <v-checkbox
      label="Name"
      :value="sortByName"
      hide-details
      v-model="sortByName"
    ></v-checkbox>
  </v-col>
  <v-col style="margin: 0">
    <v-checkbox
      label="Office"
      :value="sortByOffice"
      hide-details
      v-model="sortByOffice"
    ></v-checkbox>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      name: '',
      office: '',
      sortByName: null,
      sortByOffice: null,
    };
  },
  watch: {
    sortByName: {
      immediate: true,
      handler(value) {
        console.log(value);
      },
    },
    sortByOffice: {
      immediate: true,
      handler(value) {
        console.log(value);
      },
    },
  },
});
</script>
<style scoped lang="css">
  .heading {
    font-weight: bold;
    font-size: 20px;
  }
</style>
