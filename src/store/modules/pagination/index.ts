/* eslint-disable import/prefer-default-export */
import { RootState } from '@/types/store/rootState';
import { PaginationEntity } from '@/types/store/pagination';
import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const state: PaginationEntity = {
    pagination: {
        currentPage: 1,
        from: 0,
        to: 20,
    },
};

export const pagination: Module<PaginationEntity, RootState> = {
    state, actions, mutations, getters,
};
