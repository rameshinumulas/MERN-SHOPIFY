const actionTypes = (type) => ({
    pending: `${type}.pending`,
    success: `${type}.success`,
    error: `${type}.error`
})


export const USER_LOGIN_CHECK = actionTypes('USER_LOGIN_CHECK');
export const USER_CREATION = actionTypes('USER_CREATION');
export const GET_PRODUCTS = actionTypes('GET_PRODUCTS');
export const GET_PRODUCT_BY_ID = actionTypes('GET_PRODUCT_BY_ID');