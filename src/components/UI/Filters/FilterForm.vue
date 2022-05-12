<template>
  <v-container fluid>
    <v-row align="start">
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
        <span style="margin-right: 5px">Name</span>
        <v-icon small @click.stop="sort(sortBy.name, 'name')">{{
          ordering(sortBy.name)
        }}</v-icon>
      </v-col>
      <v-col style="margin: 0; padding: 12px 0">
        <span style="margin-right: 5px">Office</span>
        <v-icon small @click.stop="sort(sortBy.office, 'office')">{{
          ordering(sortBy.office)
        }}</v-icon>
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
      sortBy: {
        name: {
          type: 'descending',
          disabled: false,
        },
        office: {
          type: 'descending',
          disabled: false,
        },
      },
    };
  },
  methods: {
    ...mapActions(['FILTER_BY_PARAM', 'SORT_BY_PARAM', 'FILTER_USERS']),
    filterByParam(event: Event, type: string) {
      this.retrieveValue(event, type);
    },
    retrieveValue(event: Event, type: string) {
      const target = <HTMLInputElement>event.target;
      const fieldData = {
        [type]: target.value,
      };
      this.FILTER_BY_PARAM(fieldData);
    },
    ordering(sortingType: any) {
      return sortingType.type === 'descending'
        ? 'as fa-sort-amount-down-alt'
        : 'as fa-sort-amount-up-alt';
    },
    sort(field: any, fieldName: string) {
      field.type === 'descending'
        ? (field.type = 'ascending')
        : (field.type = 'descending');
      this.SORT_BY_PARAM({ [fieldName]: field });
    },
  },
  watch: {
    GET_FILTERS: {
      immediate: true,
      handler(value) {
        this.FILTER_USERS(value);
      },
    },
  },
  computed: {
    ...mapGetters(['GET_FILTERS']),
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
