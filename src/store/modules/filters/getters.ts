/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { FilterEntity } from '@/types/filter';
import { GetterTree } from 'vuex';

export const getters: GetterTree<FilterEntity, RootState> = {
  GET_FILTERS(state) {
    return state.filters;
  },
};
