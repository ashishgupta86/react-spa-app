import { userConstants } from '../constants/types';

const defaultState = {
  isloggedIn: false,
  userEmail: ''
}

const user = (state = {systemUser:defaultState}, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {...state, systemUser: action.data }
    case userConstants.LOGOUT:
      return {...state, systemUser: action.data }
    default:
      return state;
  }
}

export default user;
