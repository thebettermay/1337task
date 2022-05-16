/* eslint-disable import/prefer-default-export */
import { backendErrorsEntity } from '@/types/backendErrors';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<backendErrorsEntity> = {
  SET_ERRORS(state, payload) {
    console.log(payload)
    state.error = payload;
  },
};
