import { backendErrorsEntity } from '@/types/store/backendErrors';
import { FilterEntity } from '@/types/store/filter';
import { PaginationEntity } from '@/types/store/pagination';
import { SortingEntity } from '@/types/store/sorting';
import { UsersStore } from '@/types/store/user';

export interface RootState {
    version: string,
    pagination: PaginationEntity,
    sorting: SortingEntity,
    backendErrors: backendErrorsEntity,
    users: UsersStore,
    filters: FilterEntity,
}
