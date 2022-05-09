/* eslint-disable import/prefer-default-export */
import { FilterEntity, filters } from '@/types/filter';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<FilterEntity> = {
  SET_FILTERS(state, payload: filters) {
    const fieldName = Object.keys(payload)[0];
    state.filters = { ...state.filters, [fieldName]: Object.values(payload)[0] };
  },
};
