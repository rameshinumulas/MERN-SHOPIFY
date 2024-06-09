import { USER_LOGIN_CHECK, USER_CREATION, GET_PRODUCTS, GET_PRODUCT_BY_ID, ADD_USER_FAVORITE, GET_ALL_USER_FAVORITE, GET_USER_DETAILS } from './types';

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

export const addUserFavorite = data => ({
    type: 'BACKEND_API',
    payload: {
        url: '/product/addUserFavorites',
        method: 'POST',
        data,
        ...ADD_USER_FAVORITE
    }
})

export const actionGetAllFavorites = (id, productId) => ({
    type: 'BACKEND_API',
    payload: {
        url: `/product/getFavoritesByuser/${id}?productId=${productId}`,
        method: 'GET',
        ...GET_ALL_USER_FAVORITE
    }
});

export const getProfileInfo = () => ({
    type: 'BACKEND_API',
    payload: {
        url: '/user/profile',
        method: 'GET',
        ...GET_USER_DETAILS
    }
})