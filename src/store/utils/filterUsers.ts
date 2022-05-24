import { filters } from '@/types/store/filter';
import { UserEntity } from '@/types/store/user';

const filterUsers = (data: UserEntity[], payload: filters): UserEntity[] => {
    const filterArray = Object.keys(payload) as (keyof typeof payload)[];
    return data.filter((el: UserEntity) => filterArray.every((key) => el[key]?.toLowerCase().includes(payload[key].toLowerCase())));
};

export default filterUsers;
