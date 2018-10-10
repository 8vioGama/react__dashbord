import { connect } from 'react-redux';
import { doRegister } from './_actions';
import View from './view';

function mapStateToProps({ account }) {
  return {
    account: account ? account.account : {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doRegister: account => dispatch(doRegister(account)),
  };
}

const Register = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default Register;
