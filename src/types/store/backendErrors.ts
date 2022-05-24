export type backEndError = {
    code: number | string,
    message: string,
};

export type backendErrorsEntity = {
    error: backEndError
};
