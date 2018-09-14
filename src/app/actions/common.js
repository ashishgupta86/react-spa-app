import { alertConstants } from '../constants/types';

export const showAlertMessage = (alertMsg, alertType) => {
  return dispatch => {
    dispatch({
      type: alertConstants.SHOW_ALERT,
      data: {showAlert: true, alertMsg, alertType}   
    })
  }
}

export const hideAlertMessage = () => {
  return dispatch => {
    dispatch({
      type: alertConstants.HIDE_ALERT,
      data: {showAlert: false, alertMsg: '', alertType: ''}   
    })
  }
}
