/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { FilterEntity } from '@/types/filter';
import { Module } from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const state: FilterEntity = {
  filters: {
    name: '',
    office: '',
  },
};

export const filters: Module<FilterEntity, RootState> = {
  state, actions, mutations, getters,
};
