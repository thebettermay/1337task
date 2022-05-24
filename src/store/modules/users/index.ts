/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { UsersStore } from '@/types/store/user';
import { Module } from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state: UsersStore = { dataLoaded: false, users: [], mutatedUsersArray: [] };

export const users: Module<UsersStore, RootState> = {
  state, getters, mutations, actions,
};
