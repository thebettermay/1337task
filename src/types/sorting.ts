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

type keys = keyof UserEntity;

export type Sorting = {
    [K in keys]: {
        type: 'ascending' | 'descending',
    };
}
