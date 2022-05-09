/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { UserEntity, UsersEntity } from '@/types/user';
import { GetterTree } from 'vuex';

export const getters: GetterTree<UsersEntity, RootState> = {
  GET_USERS(state: UsersEntity): Array<UserEntity> {
    return state.users;
  },
  GET_USERS_BY_OFFICE: (state: UsersEntity) => (office: string) => {
    return state.users.map(el => el.office === office);
  },
  GET_FILTERED_USERS: (state: UsersEntity) => {
    return state.usersFiltered;
  },
};
