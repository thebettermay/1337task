<template>
    <main-layout id="content-wrapper">
      <template v-slot:content>

        <filters-layout>
          <template v-slot:content>
           <filter-form></filter-form>
          </template>
        </filters-layout>

          <users-layout>
            <template v-slot:content>
              <card-content type="card">
              </card-content>
            </template>
          </users-layout>

          <Pagination>
          </Pagination>

      </template>
    </main-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import MainLayout from '@/components/Layout/MainWrapper.vue';
import FiltersLayout from '@/components/Layout/Filters/FiltersLayout.vue';
import FilterForm from '@/components/UI/Filters/FilterForm.vue';
import UsersLayout from '@/components/Layout/Users/UsersWrapper.vue';
import CardContent from '@/components/UI/Users/Cards/CardContent.vue';
import Pagination from '@/components/UI/Pagination/Pagination.vue';

export default Vue.extend({
  components: {
    MainLayout, FiltersLayout, FilterForm, UsersLayout, CardContent, Pagination,
  },
});
</script>
