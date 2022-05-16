<template>
  <v-container fluid class="d-flex flex-column flex-md-row pa-0">
    <v-row class="justify-start mt-2">
      <span class="heading mt-5 mx-5">Filter by:</span>
      <v-col class="mx-0 mt-2 pa-0" cols="3">
        <text-field title="Name"></text-field>
      </v-col>
      <v-col class="mx-0 mt-2 pa-0" cols="3">
        <text-field title="Office"></text-field>
      </v-col>
    </v-row>
    <v-row class="align-start mt-2">
      <span class="heading mt-5 mx-5">Sort by:</span>
      <v-col class="pa-0 mt-3" cols="3">
        <v-btn
          class="mr-2"
          @click="sortBy.name.disabled = !sortBy.name.disabled"
          >Name
          <v-icon
            small
            @click.stop="
              sort(sortBy.name, 'name');
              toggleSorting(sortBy.office);
            "
            :disabled="sortBy.name.disabled"
          >
            {{ ordering(sortBy.name) }}</v-icon
          ></v-btn
        >
      </v-col>
      <v-col class="pa-0 mt-3" cols="3">
        <v-btn
          class="mr-2"
          @click="sortBy.office.disabled = !sortBy.office.disabled"
          >Office
          <v-icon
            small
            @click.stop="
              sort(sortBy.office, 'office');
              toggleSorting(sortBy.name);
            "
            :disabled="sortBy.office.disabled"
          >
            {{ ordering(sortBy.office) }}</v-icon
          ></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import TextField from '@/components/UI/Filters/Partials/TextField.vue';
import FilterIcon from '@/components/UI/Filters/Partials/FilterIcon.vue';
export default Vue.extend({
  components: { TextField, FilterIcon },
  data() {
    return {
      name: '',
      office: '',
      isActive: false,
      sortBy: {
        name: {
          type: 'descending',
          disabled: true,
        },
        office: {
          type: 'descending',
          disabled: true,
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
    toggleSorting(type: any) {
      if (!type.disabled) type.disabled = !type.disabled;
      else return;
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
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  text-align: start;
  height: 30px;
  width: 100px;
}
</style>
