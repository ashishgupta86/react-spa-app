import { alertConstants } from '../constants/types';

const defaultState = {
  showAlert: false,
  alertMsg: ''
}

const common = (state = defaultState, action) => {
  switch (action.type) {
    case alertConstants.SHOW_ALERT:
      return {...state, showAlert: action.data.showAlert,
        alertMsg: action.data.alertMsg, alertType: action.data.alertType }
    case alertConstants.HIDE_ALERT:
      return {...state, showAlert: action.data.showAlert,
        alertMsg: action.data.alertMsg, alertType: action.data.alertType }
    default:
      return state;
  }
}

export default common;