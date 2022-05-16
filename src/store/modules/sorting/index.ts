/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { SortingEntity } from '@/types/sorting';
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
