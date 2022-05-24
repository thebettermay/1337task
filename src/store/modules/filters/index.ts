/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { FilterEntity } from '@/types/store/filter';
import { Module } from 'vuex';
import { actions } from './actions';

const state: FilterEntity = {
  filters: {
    name: '',
    office: '',
  },
};

export const filters: Module<FilterEntity, RootState> = {
  state, actions,
};
