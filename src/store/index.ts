import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types/types';
import { users } from './modules/users/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {

    helloMessage: 'OOOOOOh',
  },
  modules: {
    users,
  },
};

export default new Vuex.Store<RootState>(store);
