import { SET_ACCOUNT } from './_types';

function account(state = { account: {} }, { type, payload }) {
  switch (type) {
    case SET_ACCOUNT:
      return {
        account: payload,
      };
    default:
      return state;
  }
}

export default account;
