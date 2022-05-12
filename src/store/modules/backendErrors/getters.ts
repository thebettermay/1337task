/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { backendErrorsEntity } from '@/types/backendErrors';
import { GetterTree } from 'vuex';

export const getters: GetterTree<backendErrorsEntity, RootState> = {
  GET_ERRORS(state) {
    return state.error;
  },
};
