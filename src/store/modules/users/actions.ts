/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/types/types';
import UserEntity from '@/types/user';
import getUsers from '@/api';
import { ActionTree } from 'vuex';

export const actions: ActionTree<UserEntity, RootState> = {
  async FETCH_USERS(context : any): Promise<void> {
    const res = await getUsers();
    context.commit('SET_USERS', res);
  },
};
