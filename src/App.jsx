import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import store from './store';
import './app.scss';
import { setAccount } from './components/pages/Login/_actions';

const userFromLocalStorage = localStorage.getItem('user');
const user = JSON.parse(userFromLocalStorage);
store.dispatch(setAccount(user));

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
