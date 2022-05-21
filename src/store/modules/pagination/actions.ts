/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { pagination, PaginationEntity } from '@/types/pagination';
import { UsersStore } from '@/types/user';
import { ActionTree, Commit } from 'vuex';

export const actions: ActionTree<PaginationEntity, RootState> = {
    async CHANGE_PAGINATION({ commit }: { commit: Commit }, param: pagination): Promise<void> {
        const { limit, currentPage } = param;
        const to: number = limit * currentPage;
        const from: number = to - limit;
        const payload = { from, to, currentPage };
        // commit('MUTATE_USERS_ARRAY', payload);
        commit('SET_PAGINATION', payload);
    },
};
