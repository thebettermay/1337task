/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { SortingEntity, Sorting } from '@/types/store/sorting';
import { ActionTree, Commit } from 'vuex';

export const actions: ActionTree<SortingEntity, RootState> = {
  async SORT_BY_PARAM({ commit }: { commit: Commit }, param: Sorting): Promise<void> {
    commit('SET_SORTED_USERS', param);
  },
};
