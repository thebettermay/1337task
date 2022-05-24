/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { PaginationEntity } from '@/types/store/pagination';
import { ActionTree, Commit } from 'vuex';

export const actions: ActionTree<PaginationEntity, RootState> = {
    async CHANGE_PAGINATION({ commit }: { commit: Commit }, param: { limit: number, currentPage: number }): Promise<void> {
        const { limit, currentPage } = param;
        const to: number = limit * currentPage;
        const from: number = to - limit;
        const payload = { from, to, currentPage };
        // commit('MUTATE_USERS_ARRAY', payload);
        commit('SET_PAGINATION', payload);
    },
};
