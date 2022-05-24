/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { FilterEntity, filters } from '@/types/store/filter';
import { ActionTree, Commit } from 'vuex';

export const actions: ActionTree<FilterEntity, RootState> = {
  async FILTER_BY_PARAM({ commit }: { commit: Commit }, param: filters): Promise<void> {
    commit('SET_FILTERED_USERS', param);
    this.state.pagination.pagination.currentPage = 1;
  },
};
