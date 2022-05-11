/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { UsersEntity } from '@/types/user';
import getUsers from '@/api';
import { ActionTree, Commit } from 'vuex';

export const actions: ActionTree<UsersEntity, RootState> = {
  async FETCH_USERS({ commit }: { commit: Commit }): Promise<void> {
    try {
      const res = await getUsers();
      commit('SET_USERS', res);
    } catch (err) {
      console.log(err);
    }
  },
  async FILTER_USERS(context, payload): Promise<void> {
    context.commit('SET_FILTERED_USERS', payload);
  },
};
