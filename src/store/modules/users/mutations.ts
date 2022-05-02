/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/types/types';
import UsersEntity from '@/types/user';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<UsersEntity> = {
  SET_USERS(state, payload: UsersEntity) {
    console.log(payload);
    state.users = payload;
  },
};
