/* eslint-disable @typescript-eslint/no-empty-interface */
export type UserEntity = {
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

export type UsersEntity = {
    users: Array<UserEntity>
};
