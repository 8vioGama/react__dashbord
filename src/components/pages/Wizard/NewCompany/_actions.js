import axios from 'axios';
import { SET_COMPANY } from './_types';

/*
 * action creators
 */
export function setCompany(company) {
  return (
    {
      type: SET_COMPANY,
      payload: company,
    }
  );
}

/*
 * API Calls
 */
export function postCompany(company) {
  return axios.post('/api/organisations', company);
}

/*
 * Thunks
 */
export function saveCompany(company) {
  return dispatch => postCompany(company)
    .then((res) => {
      const companyData = res.data;
      dispatch(setCompany(companyData));
    })
    .catch((err) => {
      console.log('err', err);
    });
}
