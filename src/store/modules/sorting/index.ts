/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { SortingEntity } from '@/types/store/sorting';
import { Module } from 'vuex';
import { actions } from './actions';

const state: SortingEntity = {
  sortingBy: {
    name: {
      ascending: false,
      descending: true,
    },
    office: {
      ascending: false,
      descending: true,
    },
  },
};

export const sorting: Module<SortingEntity, RootState> = {
  state, actions,
};
