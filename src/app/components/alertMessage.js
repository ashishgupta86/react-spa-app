import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideAlertMessage } from '../actions/common';

class AlertMessage extends Component {
  constructor(props){
    super(props);
    this.hideAlertMsg = this.hideAlertMsg.bind(this);
  }

  hideAlertMsg(e) {
    e.preventDefault();
    this.props.dispatch(hideAlertMessage());
  }

  render() {
    const showCls = this.props.showAlert ? 'show' : 'hide';
    const cls = `alert alert-${this.props.alertType} ${showCls} alert-custom`;
    return(
      <div className={cls}>
        <a onClick={this.hideAlertMsg}>&times;</a>
        <strong>{this.props.alertType}!</strong> {this.props.alertMsg}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showAlert: state.common.showAlert,
    alertMsg: state.common.alertMsg,
    alertType: state.common.alertType
  };
};

export default connect(mapStateToProps)(AlertMessage);
