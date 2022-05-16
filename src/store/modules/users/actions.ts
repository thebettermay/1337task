/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { UsersEntity } from '@/types/user';
import getUsers from '@/api';
import { ActionTree, Commit } from 'vuex';
import { AxiosResponse, AxiosError } from 'axios';

// eslint-disable-next-line consistent-return
const errorParser = (err) => {
  const { status } = err.err.response;
  switch (status) {
    case 401:
      return {
        code: status,
        message: 'Your session has expired',
      };
    case 403:
      return {
        code: status,
        message: 'Access denied',
      };
    case 400:
      return {
        code: status,
        message: 'User does not exist',
      };
    default: {
      return {
        code: 404,
        message: 'Page not found',
      };
    }
  }
};

export const actions: ActionTree<UsersEntity, RootState> = {
  async FETCH_USERS({ commit }: { commit: Commit }): Promise<void> {
    try {
      const res = await getUsers();
      commit('SET_USERS', res);
    } catch (err: unknown) {
      const errorObject = errorParser({ err });
      console.log(errorObject)
      commit('SET_ERRORS', errorObject);
    }
  },
  async FILTER_USERS(context, payload): Promise<void> {
    context.commit('SET_FILTERED_USERS', payload);
  },
};
