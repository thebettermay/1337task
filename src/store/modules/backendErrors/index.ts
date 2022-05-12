/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { backendErrorsEntity } from '@/types/backendErrors';
import { Module } from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const state: backendErrorsEntity = {
  error: {
    code: '',
    message: '',
  },
};

export const backendErrors: Module<backendErrorsEntity, RootState> = {
  state, actions, mutations, getters,
};
