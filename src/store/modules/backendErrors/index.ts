/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { backendErrorsEntity } from '@/types/store/backendErrors';
import { Module } from 'vuex';
import { mutations } from './mutations';
import { getters } from './getters';

const state: backendErrorsEntity = {
  error: {
    code: '',
    message: '',
  },
};

export const backendErrors: Module<backendErrorsEntity, RootState> = {
  state, mutations, getters,
};
