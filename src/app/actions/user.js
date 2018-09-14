import { userConstants }  from '../constants/types';
import history from '../helpers/history';

export const processLogin = (user) => {
  return dispatch => {
    dispatch({
      type: userConstants.LOGIN_REQUEST,
      data: { isloggedIn:false, userEmail: '' }
    });

    setTimeout(()=>{
      if(user.email === "ashishg32@gmail.com" && user.password === "dummy@123"){
        dispatch({
          type: userConstants.LOGIN_SUCCESS,
          data: { isloggedIn: true, userEmail: user.email }
        });
        history.push('/dashboard');
      } else {
        dispatch({
          type: userConstants.DELETE_FAILURE,
          data: { isloggedIn:false, userEmail: '' }
        });
      }
    }, 1000);
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: userConstants.LOGOUT,
      data: { isloggedIn:false, userEmail: '' }
    });
    history.push('/');
  }
}

