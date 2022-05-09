/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { UsersEntity } from '@/types/user';
import { Module } from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state: UsersEntity = { users: [], usersFiltered: [] };

export const users: Module<UsersEntity, RootState> = {
  state, getters, mutations, actions,
};
