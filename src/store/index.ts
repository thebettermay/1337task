import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './rootstate/types';
import { users } from './modules/users/index';
import { filters } from './modules/filters/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0',
  },
  modules: {
    users,
    filters,
  },
};

export default new Vuex.Store<RootState>(store);
