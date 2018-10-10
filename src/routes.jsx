import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Controls
import PrivateRoute from './components/controls/PrivateRoute/PrivateRoute';

// Pages
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Thanks from './components/pages/Thanks/thanks';
import NewCompany from './components/pages/Wizard/NewCompany';
import NewLocation from './components/pages/Wizard/NewLocation';

const userFromLocalStorage = localStorage.getItem('user');
const user = JSON.parse(userFromLocalStorage);
const isAuthenticated = user ? true : false; /* es-lint-ignore */

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/thanks" Component={Thanks} isAuthenticated={isAuthenticated} />
      <PrivateRoute exact path="/start/company" Component={NewCompany} isAuthenticated={isAuthenticated} />
      <PrivateRoute exact path="/start/location" Component={NewLocation} isAuthenticated={isAuthenticated} />
      <PrivateRoute exact path="/" Component={NewCompany} isAuthenticated={isAuthenticated} /> // TODO: Change following to Dashboard component
    </Switch>
  </BrowserRouter>
);
