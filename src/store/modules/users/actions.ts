/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/types/types';
import { UsersEntity } from '@/types/user';
import getUsers from '@/api';
import { ActionTree, Commit } from 'vuex';

export const actions: ActionTree<UsersEntity, RootState> = {
  async FETCH_USERS({ commit }: { commit: Commit }): Promise<void> {
    const res = await getUsers();
    commit('SET_USERS', res);
  },
};
