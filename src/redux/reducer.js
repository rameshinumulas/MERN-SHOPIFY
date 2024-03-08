import { USER_LOGIN_CHECK } from './types';

const actionObjects = {
  loading: false,
  success: false,
  error: false
}

const initialState = {
  profileInfo: {},
  profileInfoAction: actionObjects
}

const actionCreaters = (type) => ({
  loading: type === 'pending',
  success: type === 'success',
  error: type === 'error'
})

export const reducer = (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return {
        ...state
      }
  }
}

