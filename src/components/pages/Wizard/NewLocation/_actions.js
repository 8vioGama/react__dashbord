import axios from 'axios';
import { SET_LOCATIONS } from './_types';

/*
 * action creators
 */
export function setLocations(location) {
  return (
    {
      type: SET_LOCATIONS,
      payload: location,
    }
  );
}

/*
 * API Calls
 */
export function postLocation(location) {
  return axios.post('/api/locations', location);
}

/*
 * Thunks
 */
export function saveLocation(location) {
  return dispatch => postLocation(location)
    .then((res) => {
      const locationData = res.data;
      dispatch(setLocations(locationData));
    })
    .catch((err) => {
      console.log('err', err);
    });
}
