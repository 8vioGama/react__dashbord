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
export function postAccount(account) {
  return axios.post('/api/accounts', account);
}

/*
 * Thunks
 */
export function doRegister(account) {
  return dispatch => postAccount(account)
    .then((res) => {
      const accountData = res.data;
      dispatch(setAccount(accountData));
    })
    .catch((err) => {
      console.log('err', err);
    });
}
