/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { SortingEntity } from '@/types/sorting';
import { ActionTree, Commit } from 'vuex';

export const actions: ActionTree<SortingEntity, RootState> = {
  async SORT_BY_PARAM({ commit }: { commit: Commit }, param: any): Promise<void> {
    commit('SET_SORTING', param);
  },
};
