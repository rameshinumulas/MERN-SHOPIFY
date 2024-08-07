import { ADD_CART_ITEM, ADD_USER_FAVORITE, GET_ALL_USER_FAVORITE, GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_USER_DETAILS, USER_CREATION, USER_LOGIN_CHECK } from './types';

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
  productDetailsById: {},
  actionSaveFavorite: actionObjects
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
      localStorage.setItem('user_token', action.payload?.token)
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

    case ADD_USER_FAVORITE.pending: 
      return {
        ...state,
        actionSaveFavorite: actionCreaters('pending')
      }
    case ADD_USER_FAVORITE.success: 
    return {
      ...state,
      actionSaveFavorite: actionCreaters('success')
    }
    case ADD_USER_FAVORITE.error: 
    return {
      ...state,
      actionSaveFavorite: actionCreaters('error')
    }

    case GET_ALL_USER_FAVORITE.pending: 
    return {
      ...state,
      actionGetAllFavorites: actionCreaters('pending')
    }
    case GET_ALL_USER_FAVORITE.success: 
    return {
      ...state,
      favoritesList: action.payload?.data,
      actionGetAllFavorites: actionCreaters('success')
    }
    case GET_ALL_USER_FAVORITE.error: 
    return {
      ...state,
      actionGetAllFavorites: actionCreaters('error')
    }

    case GET_USER_DETAILS.pending: 
    return {
      ...state,
      actionGetUserProfile: actionCreaters('pending')
    }
    case GET_USER_DETAILS.success: 
    return {
      ...state,
      userDetails: action.payload?.data,
      actionGetUserProfile: actionCreaters('success')
    }
    case GET_USER_DETAILS.error: 
    return {
      ...state,
      actionGetUserProfile: actionCreaters('error')
    }

    case ADD_CART_ITEM.pending: 
    return {
      ...state,
      actionGetUserProfile: actionCreaters('pending')
    }
    case ADD_CART_ITEM.success: 
    return {
      ...state,
      userDetails: action.payload?.data,
      actionGetUserProfile: actionCreaters('success')
    }
    case ADD_CART_ITEM.error: 
    return {
      ...state,
      actionGetUserProfile: actionCreaters('error')
    }
  
    default:
      return {
        ...state
      }
  }
}

