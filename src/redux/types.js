const actionTypes = (type) => ({
    pending: `${type}.pending`,
    success: `${type}.success`,
    error: `${type}.error`
})


export const USER_LOGIN_CHECK = actionTypes('USER_LOGIN_CHECK');