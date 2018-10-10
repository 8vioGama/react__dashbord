import { connect } from 'react-redux';
import { saveCompany } from './_actions';
import View from './view';

function mapStateToProps({ company }) {
  return {
    company: company ? company.company : {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveCompany: company => dispatch(saveCompany(company)),
  };
}

const NewCompany = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default NewCompany;
