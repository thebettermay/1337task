import { backEndError } from '@/types/backendErrors';
import { AxiosError } from 'axios';

const errorParser = (err: AxiosError): backEndError | undefined => {
    if (err.response) {
        const { status } = err.response;
        switch (status) {
            case 401:
                return {
                    code: status,
                    message: 'Your session has expired',
                };
            case 403:
                return {
                    code: status,
                    message: 'Access denied',
                };
            case 400:
                return {
                    code: status,
                    message: 'User does not exist',
                };
            default: {
                return {
                    code: 404,
                    message: 'Page not found',
                };
            }
        }
    }
};

export default errorParser;
