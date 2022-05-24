/* eslint-disable import/prefer-default-export */
import { backendErrorsEntity } from '@/types/store/backendErrors';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<backendErrorsEntity> = {
  SET_ERRORS(state, payload) {
    state.error = payload;
  },
};
