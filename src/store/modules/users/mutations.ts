/* eslint-disable import/prefer-default-export */
import { UsersEntity, UserEntity } from '@/types/user';
import { MutationTree } from 'vuex';

declare type Directions = {
  ascending: number,
  descending: number,
}

const sortBy = (field: string, data: UserEntity, direction: string) => {
  const copyData = [...data];
  const directions: Directions = {
    ascending: 1,
    descending: -1,
  };
  return copyData.sort((a, b) => {
    const fieldA = a[field] || '-';
    const fieldB = b[field] || '-';
    return fieldA.localeCompare(fieldB) * directions[direction];
  });
};

export const mutations: MutationTree<UsersEntity> = {
  SET_USERS(state, payload: Array<UserEntity>) {
    state.users = payload;
  },
  SET_FILTERED_USERS(state, payload) {
    const data = this.state.users.users;
    const filteredUsers = data.filter((el: any) => Object.keys(payload).every((key) => el[key]?.toLowerCase().includes(payload[key].toLowerCase())));
    state.usersFiltered = filteredUsers;
  },

  SET_SORTING(state, payload) {
    const { users, usersFiltered } = state;
    const { filters } = this.state.filters;
    const fieldName = Object.keys(payload)[0];
    const { type } = payload[fieldName];
    const ifFiltered = Object.values(filters).some((el) => el !== '');
    const mutatedData = ifFiltered ? usersFiltered : users;

    const res = sortBy(fieldName, mutatedData, type);
    state.usersFiltered = res;
  },
};
