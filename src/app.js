import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import './app/assets/index.css';

import store from './app/helpers/store';
import history from './app/helpers/history';
import authModule from './app/helpers/authModule';

import Header from './app/components/header';
import AlertMessage from './app/components/alertMessage';
import LoginWrapper from './app/containers/login/wrapper';
import DashboardWrapper from './app/containers/dashboard/wrapper';
 
const App = () => (
  <Provider store={store} >
    <div className="app-container">
      <Header />
      <div className="body-content">
        <AlertMessage />
        <Router history={history}>            
          <div>
            <Route exact path="/" component={LoginWrapper}/>
            <Route path="/login" component={LoginWrapper}/>
            <Route path="/dashboard" component={authModule(DashboardWrapper)} />            
          </div>
        </Router>
      </div>          
    </div>              
  </Provider>
);
 
export default App