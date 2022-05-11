// /* eslint-disable import/prefer-default-export */
// import { FilterEntity } from '@/types/filter';
// import { UserEntity, UsersEntity } from '@/types/user';
// import Vue from 'vue';
// import { MutationTree } from 'vuex';

// const sortBy = (field: string, data: UserEntity, direction: string) => {
//   const copyData = [...data];
//   const directions = {
//     ascending: 1,
//     descending: -1,
//   };
//   return copyData.sort((a, b) => {
//     const fieldA = a[field] || '-';
//     const fieldB = b[field] || '-';
//     return fieldA.localeCompare(fieldB) * directions[direction];
//   });
// };

// export const mutations: MutationTree<UsersEntity> = {
//   SET_SORTING(state, payload) {
//     const { users, usersFiltered } = this.state.users;
//     const { filters } = this.state.filters;
//     const fieldName = Object.keys(payload)[0];
//     const { type } = payload[fieldName];
//     const ifFiltered = Object.values(filters).some((el) => el !== '');
//     const mutatedData = ifFiltered ? usersFiltered : users;

//     const res = sortBy(fieldName, mutatedData, type);
//     console.log(res, state)
//     // Vue.set(state, 'usersFiltered', res);
//     state.usersFiltered = res;
//   },
// };
