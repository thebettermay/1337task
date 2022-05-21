/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { UsersStore } from '@/types/user';
import { AxiosError } from 'axios';
import getUsers from '@/api';
import { ActionTree, Commit } from 'vuex';
import errorParser from '../../utils/backendErrorParser';

// eslint-disable-next-line consistent-return

export const actions: ActionTree<UsersStore, RootState> = {
  async FETCH_USERS({ commit }: { commit: Commit }): Promise<void> {
    try {
      const res = await getUsers();
      commit('SET_USERS', res);
    } catch (err: unknown) {
      const error = err as AxiosError;
      const errorObject = errorParser(error);
      commit('SET_ERRORS', errorObject);
    }
  },
  async FILTER_USERS(context, payload): Promise<void> {
    context.commit('SET_FILTERED_USERS', payload);
  },
};
