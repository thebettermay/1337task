/* eslint-disable import/prefer-default-export */
import { UsersStore, UserEntity } from '@/types/store/user';
import { MutationTree } from 'vuex';

import { Sorting } from '@/types/store/sorting';
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

  SET_SORTED_USERS(state: UsersStore, payload: Sorting) {
    const { mutatedUsersArray } = state;
    const [fieldName] = Object.keys(payload) as (keyof typeof payload)[];
    const { type } = payload[fieldName];
    const res = sortBy(fieldName, mutatedUsersArray, type);
    state.mutatedUsersArray = res;
  },
};
