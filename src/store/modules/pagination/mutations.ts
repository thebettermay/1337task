/* eslint-disable import/prefer-default-export */
import { PaginationEntity } from '@/types/pagination';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<PaginationEntity> = {
  SET_PAGINATION(state, payload) {
    console.log(payload)
    state.pagination = payload;
  },
};
