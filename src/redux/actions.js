import { USER_LOGIN_CHECK } from './types';

export const userLoginCheck = (data) => ({
    type: 'USER_LOGIN',
    payload: {
        url: '/user_login',
        method: 'POST',
        data,
        ...USER_LOGIN_CHECK
    }
})