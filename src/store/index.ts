import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './rootstate/types';
import { users } from './modules/users/index';
import { filters } from './modules/filters/index';
import { sorting } from './modules/sorting/index';
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0',
  },
  modules: {
    users,
    filters,
    sorting,
  },
};

export default new Vuex.Store<RootState>(store);
