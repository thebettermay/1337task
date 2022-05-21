/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { pagination, PaginationEntity } from '@/types/pagination';
import { GetterTree } from 'vuex';

export const getters: GetterTree<PaginationEntity, RootState> = {
  GET_PAGINATION(state: PaginationEntity): pagination {
    return state.pagination;
  },
  GET_CURRENT_PAGE(state: PaginationEntity): number {
    return state.pagination.currentPage;
  },
};
