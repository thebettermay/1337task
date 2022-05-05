/* eslint-disable import/prefer-default-export */
import { UsersEntity, UserEntity } from '@/types/user';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<UsersEntity> = {
  SET_USERS(state, payload: Array<UserEntity>) {
    state.users = payload;
  },
};
