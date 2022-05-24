import { UserEntity } from '@/types/store/user';

declare type Directions = {
    ascending: number,
    descending: number,
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const sortBy = (field: (keyof UserEntity), data: UserEntity[], direction: 'ascending' | 'descending') => {
    const copyData = [...data];
    const directions: Directions = {
        ascending: 1,
        descending: -1,
    };
    return copyData.sort((a, b) => {
        const fieldA = a[field] || '-';
        const fieldB = b[field] || '-';
        if (typeof fieldA === 'string' && typeof fieldB === 'string') {
            return fieldA.localeCompare(fieldB) * directions[direction];
        }
        return -1;
    });
};

export default sortBy;
