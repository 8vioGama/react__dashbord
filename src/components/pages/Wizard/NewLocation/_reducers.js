import { SET_LOCATIONS } from './_types';

function locations(state = { locations: {} }, { type, payload }) {
  switch (type) {
    case SET_LOCATIONS:
      return {
        locations: payload,
      };
    default:
      return state;
  }
}

export default locations;
