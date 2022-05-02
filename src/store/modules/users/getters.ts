/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/types/types';
import UsersEntity from '@/types/user';
import { GetterTree } from 'vuex';

export const getters: GetterTree<UsersEntity, RootState> = {
  GET_USERS(state) : UsersEntity[] {
    return state;
  },
};
