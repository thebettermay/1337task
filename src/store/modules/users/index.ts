/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { UsersStore } from '@/types/user';
import { Module } from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state: UsersStore = { dataLoaded: false, users: [], mutatedUsersArray: [] };

export const users: Module<UsersStore, RootState> = {
  state, getters, mutations, actions,
};
