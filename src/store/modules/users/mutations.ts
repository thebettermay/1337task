/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { UsersEntity, UserEntity } from '@/types/user';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<UsersEntity> = {
  SET_USERS(state, payload: Array<UserEntity>) {
    state.users = payload;
  },
  SET_FILTERED_USERS(state, payload) {
    const filteredUsers = this.state.users.users.filter((el) => el.name.includes(payload.name) || el.office.includes(payload.office));
    state.usersFiltered = filteredUsers;
  }
};
