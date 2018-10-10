import { connect } from 'react-redux';
import { doLogin } from './_actions';
import View from './view';

function mapStateToProps({ account }) {
  return {
    account: account ? account.account : {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doLogin: account => dispatch(doLogin(account)),
  };
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default Login;
