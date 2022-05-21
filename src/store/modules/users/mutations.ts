/* eslint-disable import/prefer-default-export */
import { UsersStore, UserEntity } from '@/types/user';
import { MutationTree } from 'vuex';

import { Sorting } from '@/types/sorting';
import sortBy from '../../utils/sortBy';
import filterUsers from '../../utils/filterUsers';

export const mutations: MutationTree<UsersStore> = {
  SET_USERS(state, payload: Array<UserEntity>) {
    state.users = payload;
    state.mutatedUsersArray = payload;
    state.dataLoaded = true;
  },
  SET_FILTERED_USERS(state: UsersStore, payload) {
    const data = [...state.users];
    const filteredUsers = filterUsers(data, payload);
    state.mutatedUsersArray = filteredUsers;
  },

  SET_SORTING(state: UsersStore, payload: Sorting) {
    const { mutatedUsersArray } = state;
    const [fieldName] = Object.keys(payload) as (keyof typeof payload)[];
    const { type } = payload[fieldName];
    const res = sortBy(fieldName, mutatedUsersArray, type);
    state.mutatedUsersArray = res;
  },
  MUTATE_USERS_ARRAY(state, payload) {
    const { from, to } = payload;
    const users = state.users.slice(from, to);
    state.mutatedUsersArray = users;
  },
};
