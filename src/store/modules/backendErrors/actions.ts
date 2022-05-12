/* eslint-disable import/prefer-default-export */
import { RootState } from '@/store/rootstate/types';
import { backendErrorsEntity } from '@/types/backendErrors';
import { FilterEntity, filters } from '@/types/filter';
import { ActionTree, Commit } from 'vuex';

export const actions: ActionTree<backendErrorsEntity, RootState> = {
  async COMMIT_ERRORS({ commit }: { commit: Commit }, error: backendErrorsEntity): Promise<void> {
    console.log(error.response)
    // commit('SET_ERRORS', param);
  },
};
