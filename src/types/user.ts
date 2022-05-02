/* eslint-disable @typescript-eslint/no-empty-interface */
type UserEntity = {
    email: string,
    gitHub: string,
    highlighted: boolean
    imagePortraitUrl: string | null,
    imageWallOfLeetUrl: string,
    linkedIn: string | null,
    mainText: string,
    manager: string,
    name: string,
    office: string,
    orgUnit: string,
    phoneNumber: string,
    published: boolean,
    stackOverflow: string | null,
    twitter: string | null,
};

interface UsersEntity extends Array<UserEntity>{users: []}

export default UsersEntity;
