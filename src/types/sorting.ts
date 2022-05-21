import { UserEntity } from './user';

export type SortingEntity = {
    sortingBy: {
        name: {
            ascending: boolean,
            descending: boolean,
        },
        office: {
            ascending: boolean,
            descending: boolean,
        },
    }
}

type aaa = keyof UserEntity;

export type Sorting = {
    [K in aaa]: {
        type: 'ascending' | 'descending',
        disabled: boolean,
    };
}
