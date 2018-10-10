import { connect } from 'react-redux';
import { saveLocation } from './_actions';
import View from './view';

function mapStateToProps({ location, company }) {
  return {
    location: location ? location.location : {},
    company: company ? company.company : {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveLocation: location => dispatch(saveLocation(location)),
  };
}

const NewLocation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default NewLocation;
