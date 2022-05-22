import { backendErrorsEntity } from '@/types/backendErrors';
import { FilterEntity } from '@/types/filter';
import { PaginationEntity } from '@/types/pagination';
import { SortingEntity } from '@/types/sorting';
import { UsersStore } from '@/types/user';

export interface RootState {
    version: string,
    pagination: PaginationEntity,
    sorting: SortingEntity,
    backendErrors: backendErrorsEntity,
    users: UsersStore,
    filters: FilterEntity,
}
