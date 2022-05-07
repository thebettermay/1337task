<template>
  <v-container fluid>
    <v-row mx-6 align="start" style="padding-top: 10px" q>
      <span class="heading">Filter by:</span>
      <v-col style="margin: 0; padding: 0">
        <v-text-field
          style="max-width: 150px; padding: 0; margin-right: 10px"
          label="Name"
          hide-details
          >{{ name }}
        </v-text-field>
      </v-col>
      <v-col style="margin: 0; padding: 0">
        <v-text-field
          style="max-width: 150px; padding: 0"
          label="Office"
          hide-details
        ></v-text-field>
      </v-col>

      <v-spacer></v-spacer>
      <span class="heading">Sort by:</span>
      <v-col style="margin: 0; padding: 12px 0">
        <v-checkbox
          label="Name"
          :value="sortByName"
          hide-details
          v-model="sortByName"
          style="margin: 0; padding: 0"
        ></v-checkbox>
      </v-col>
      <v-col style="margin: 0; padding: 12px 0">
        <v-checkbox
          label="Office"
          :value="sortByOffice"
          hide-details
          v-model="sortByOffice"
          style="margin: 0; padding: 0"
        ></v-checkbox>
      </v-col>
      <v-spacer></v-spacer>
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
  margin: 10px 20px 10px 10px;
  height: 30px;
}
</style>
