import { SET_USER } from './_types';

function user(state = { user: {} }, { type, payload }) {
  switch (type) {
    case SET_USER:
      return {
        user: payload,
      };
    default:
      return state;
  }
}

export default user;
