/* eslint-disable import/prefer-default-export */
import { PaginationEntity } from '@/types/store/pagination';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<PaginationEntity> = {
  SET_PAGINATION(state, payload) {
    state.pagination = payload;
  },
};
