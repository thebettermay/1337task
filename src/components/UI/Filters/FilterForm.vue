<template>
  <v-container fluid>
    <v-row mx-6 align="start" style="padding-top: 10px" q>
      <span class="heading">Filter by:</span>
      <v-col style="margin: 0; padding: 0">
        <v-text-field
          style="max-width: 150px; padding: 0; margin-right: 10px"
          label="Name"
          hide-details
          v-model="name"
          @keyup="filterByParam($event, 'name')"
        >
        </v-text-field>
      </v-col>
      <v-col style="margin: 0; padding: 0">
        <v-text-field
          style="max-width: 150px; padding: 0"
          label="Office"
          hide-details
          v-model="office"
          @keyup="filterByParam($event, 'office')"
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
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  data() {
    return {
      name: '',
      office: '',
      sortByName: null,
      sortByOffice: null,
    };
  },
  methods: {
    ...mapActions(['FILTER_BY_PARAM', 'FILTER_USERS']),
    filterByParam(event: Event, type: string) {
      this.retrieveValue(event, type);
    },
    retrieveValue(event: Event, type: string) {
      const target = <HTMLInputElement>event.target;
      const fieldData = {
        [type]: target.value,
      };
      setTimeout(() => this.FILTER_BY_PARAM(fieldData), 1000);
    },
  },
  watch: {
    GET_FILTERS: {
      immediate: true,
      handler(value) {
        console.log(value);
        this.FILTER_USERS(value);
      },
    },
  },
  computed: {
    ...mapGetters(['GET_FILTERS']),
    // filters() {
    //   this.filters = this.GET_FILTERS;
    // },
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
