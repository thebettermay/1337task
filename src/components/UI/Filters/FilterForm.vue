<template>
  <v-container fluid class="d-flex flex-column flex-md-row pa-0">
    <v-row class="justify-start mt-2">
      <span class="heading mt-5 mx-5">Filter by:</span>
      <v-col class="mx-0 mt-2 pa-0" cols="3">
        <text-field title="Name" @updateData="updateFilters"></text-field>
      </v-col>
      <v-col class="mx-0 mt-2 pa-0" cols="3">
        <text-field title="Office" @updateData="updateFilters"></text-field>
      </v-col>
    </v-row>
    <v-row class="align-start mt-2">
      <span class="heading mt-5 mx-5">Sort by:</span>
      <v-col class="pa-0 mt-3" cols="3">
        <v-btn :class="classes" @click.stop="sort(sortBy.name, 'name')"
          >Name</v-btn
        >
      </v-col>
      <v-col class="pa-0 mt-3" cols="3">
        <v-btn :class="classes" @click.stop="sort(sortBy.office, 'office')"
          >Office</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import { mapActions } from 'vuex';
import TextField from '@/components/UI/Filters/Partials/TextField.vue';

export default Vue.extend({
  components: { TextField },
  data() {
    return {
      name: '',
      office: '',
      isActive: false,
      sortBy: {
        name: {
          type: 'ascending',
        },
        office: {
          type: 'ascending',
        },
      },
    };
  },
  computed: {
    classes() {
      // eslint-disable-next-line default-case
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'mr-2 button-size-small';
        default:
          return 'mr-2';
      }
    },
  },
  methods: {
    ...mapActions(['FILTER_BY_PARAM', 'SORT_BY_PARAM', 'FILTER_USERS']),
    updateFilters(val: { name: string }) {
      const [filter] = Object.keys(val);
      const [value] = Object.values(val);
      Vue.set(this, filter, value);
      const filterData = {
        name: this.name,
        office: this.office,
      };
      this.FILTER_BY_PARAM(filterData);
    },
    sort(field: { type: 'ascending' | 'descending' }, fieldName: string) {
      // eslint-disable-next-line no-unused-expressions
      field.type === 'descending'
        ? (field.type = 'ascending')
        : (field.type = 'descending');
      this.SORT_BY_PARAM({ [fieldName]: field });
    },
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

.button-size-small {
  width: 15px;
  font-size: 10px !important;
}
</style>
