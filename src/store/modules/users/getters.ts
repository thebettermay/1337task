/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { UserEntity, UsersStore } from '@/types/user';
import { GetterTree } from 'vuex';

export const getters: GetterTree<UsersStore, RootState> = {
  GET_USERS(state: UsersStore): Array<UserEntity> {
    return state.mutatedUsersArray;
  },
  GET_USERS_BY_NAME: (state: UsersStore) => (name: string) => {
    return state.users.map(el => el.name === name);
  },
  GET_DATA_STATUS(state: UsersStore): boolean {
    return state.dataLoaded;
  },
};
