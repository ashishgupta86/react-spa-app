import React from 'react';

const LoginTemplate = (props) => (
  <div className="lgform-container">
    <h2>Login into application</h2>
    <form onSubmit={props.submitForm} className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input type="email" className="form-control" id="email"
          name="email" autoComplete="off" onChange={props.inputFieldChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control"
          id="password" name="password" autoComplete="off"
          onChange={props.inputFieldChange} />
      </div>
      <div className="action-buttons">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
);

export default LoginTemplate;