/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { pagination, PaginationEntity } from '@/types/store/pagination';
import { GetterTree } from 'vuex';

export const getters: GetterTree<PaginationEntity, RootState> = {
  GET_PAGINATION(state: PaginationEntity): pagination {
    return state.pagination;
  },
  GET_CURRENT_PAGE(state: PaginationEntity): number {
    return state.pagination.currentPage;
  },
};
