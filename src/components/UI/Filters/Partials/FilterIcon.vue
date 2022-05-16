<template>
  <v-icon
    small
    @click.stop="
      sort(sortBy.office, 'office');
      toggleSorting(sortBy.name);
    "
    :disabled="sortBy.office.disabled"
  >
    {{ ordering(sortBy.office) }}</v-icon
  >
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import TextField from '@/components/UI/Filters/Partials/TextField.vue';

export default Vue.extend({
  props: ['sortBy'],
  components: { TextField },
  //   data() {
  //     // return {
  //     //   sortBy: {
  //     //     name: {
  //     //       type: 'descending',
  //     //       disabled: true,
  //     //     },
  //     //     office: {
  //     //       type: 'descending',
  //     //       disabled: true,
  //     //     },
  //     //   },
  //     // };
  //   },
  methods: {
    ...mapActions(['FILTER_BY_PARAM', 'SORT_BY_PARAM', 'FILTER_USERS']),
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
      let type = '';
      field.type === 'descending'
        ? (type = 'ascending')
        : (type = 'descending');
      this.$emit('toggleDirection', type);
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
  font-size: 16px;
  margin: 10px 20px 10px 10px;
  height: 30px;
  width: 100px;
}
</style>
