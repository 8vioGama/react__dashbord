import axios from 'axios';
import { SET_ACCOUNT } from './_types';

/*
 * action creators
 */
export function setAccount(account) {
  return (
    {
      type: SET_ACCOUNT,
      payload: account,
    }
  );
}

/*
 * API Calls
 */
export function postLogin(account) {
  return axios.post('//localhost:3000/login', account);
}

/*
 * Thunks
 */
export function doLogin(account) {
  return dispatch => postLogin(account)
    .then((res) => {
      const accountData = res.data;
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch(setAccount(accountData));
    })
    .catch((err) => {
      console.log('err', err);
    });
}
