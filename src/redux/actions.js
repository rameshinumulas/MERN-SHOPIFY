import { USER_LOGIN_CHECK, USER_CREATION } from './types';

export const userLoginCheck = (data) => ({
    type: 'BACKEND_API',
    payload: {
        url: '/user_login/',
        method: 'POST',
        data,
        ...USER_LOGIN_CHECK
    }
})

export const userRegistration = (data) => ({
    type: 'BACKEND_API',
    payload: {
        url: '/user_registration/',
        method: 'POST',
        data,
        ...USER_CREATION
    }
})

export const dataClearAction = (data) => ({
    type: 'USER_DATA_CLEAR_TYPE',
    payload: {
        ...data
    }
})