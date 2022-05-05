/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/types/types';
import { UserEntity, UsersEntity } from '@/types/user';
import { GetterTree } from 'vuex';

export const getters: GetterTree<UsersEntity, RootState> = {
  GET_USERS(state: UsersEntity) : Array<UserEntity> {
    return state.users;
  },
  GET_USER_BY_NAME: (state: UsersEntity) => (name: string) => {
    return state.users.find(el => el.name === name);
  },
};
