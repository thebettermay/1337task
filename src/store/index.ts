import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './rootstate/types';
import { users } from './modules/users/index';
import { filters } from './modules/filters/index';
import { sorting } from './modules/sorting/index';
import { backendErrors } from './modules/backendErrors/index';
import { pagination } from './modules/pagination';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0',
    pagination: {
      pagination: {
        currentPage: 1,
        from: 0,
        to: 20,
      },
    },
    sorting: {
      sortingBy: {
        name: {
          ascending: false,
          descending: true,
        },
        office: {
          ascending: false,
          descending: true,
        },
      },
    },
    filters: {
      filters: {
        name: '',
        office: '',
      },
    },
    backendErrors: {
      error: {
        code: '',
        message: '',
      },
    },
    users: {
      dataLoaded: false, users: [], mutatedUsersArray: [],
    },
  },
  modules: {
    users,
    filters,
    sorting,
    backendErrors,
    pagination,
  },
};

export default new Vuex.Store<RootState>(store);
