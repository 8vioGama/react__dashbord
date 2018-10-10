import { SET_COMPANY } from './_types';

function company(state = { company: {} }, { type, payload }) {
  switch (type) {
    case SET_COMPANY:
      return {
        company: payload,
      };
    default:
      return state;
  }
}

export default company;
