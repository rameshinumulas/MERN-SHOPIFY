import { USER_LOGIN_CHECK, USER_CREATION, GET_PRODUCTS, GET_PRODUCT_BY_ID } from './types';

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

export const getAllProducts = (category) => ({
    type: 'BACKEND_API',
    payload: {
        url: `/product/get/?category=${category || ''}`,
        method: 'GET',
        ...GET_PRODUCTS
    }
})

export const getProductById = id => ({
    type: 'BACKEND_API',
    payload: {
        url: `/product/getInfo/${id}/`,
        method: 'GET',
        ...GET_PRODUCT_BY_ID
    }
})