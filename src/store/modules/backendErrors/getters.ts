/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { backendErrorsEntity } from '@/types/store/backendErrors';
import { GetterTree } from 'vuex';

export const getters: GetterTree<backendErrorsEntity, RootState> = {
  GET_ERRORS(state) {
    return state.error;
  },
};
