import { GET_PRODUCTS, GET_PRODUCT_BY_ID, USER_CREATION, USER_LOGIN_CHECK } from './types';

const actionObjects = {
  loading: false,
  success: false,
  error: false
}

const initialState = {
  profileInfo: {},
  profileInfoAction: actionObjects,
  userCreationAction: actionObjects,
  userCreationData: {},
  getProductInfoAction: actionObjects,
  productDetailsById: {}
}

const actionCreaters = (type) => ({
  loading: type === 'pending',
  success: type === 'success',
  error: type === 'error'
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_CHECK.pending:
      return {
        ...state,
        profileInfoAction: actionCreaters('pending')
      }
    case USER_LOGIN_CHECK.success:
      return {
        ...state,
        profileInfo: action.payload,
        profileInfoAction: actionCreaters('success')
      }
    case USER_LOGIN_CHECK.error:
      return {
        ...state,
        profileInfo: action.payload,
        profileInfoAction: actionCreaters('error')
      }

    case USER_CREATION.pending:
      return {
        ...state,
        userCreationAction: actionCreaters('pending')
      }

    case USER_CREATION.success:
      return {
        ...state,
        userCreationAction: actionCreaters('success'),
        userCreationData: action.payload
      }

    case USER_CREATION.error:
      return {
        ...state,
        userCreationAction: actionCreaters('error')
      }
    case GET_PRODUCTS.pending:
      return {
        ...state,
        getProductAction: actionCreaters('pending')
      }

    case GET_PRODUCTS.success:
      return {
        ...state,
        getProductAction: actionCreaters('success'),
        productList: action.payload
      }

    case GET_PRODUCTS.error:
      return {
        ...state,
        getProductAction: actionCreaters('error')
      }
    
    case GET_PRODUCT_BY_ID.pending:
      return {
        ...state,
        getProductInfoAction: actionCreaters('pending')
      }

    case GET_PRODUCT_BY_ID.success:
      return {
        ...state,
        getProductInfoAction: actionCreaters('success'),
        productDetailsById: action.payload?.data
      }

    case GET_PRODUCT_BY_ID.error:
      return {
        ...state,
        getProductInfoAction: actionCreaters('error')
      }
    case 'USER_DATA_CLEAR_TYPE':
      return {
        ...state,
        ...action.payload
      }

    default:
      return {
        ...state
      }
  }
}

