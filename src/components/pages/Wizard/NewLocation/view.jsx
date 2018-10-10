import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import TopBar from '../../../controls/TopBar/TopBar';
import SideBar from '../../../controls/SideBar/SideBar';

class NewLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToNextStep: false,
    };

    this.saveLocation = this.saveLocation.bind(this);
  }

  saveLocation(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const newLocation = {
      name: data.get('name'),
      address: {
        streetAndNumber: data.get('streetAndNumber'),
        city: data.get('city'),
        state: data.get('state'),
        postalCode: data.get('postalCode'),
      },
      organisation: this.props.company.id,
    };

    this.props.saveLocation(newLocation)
      .then(() => {
        console.log('Location saved');
        this.setState({ redirectToNextStep: true });
      });
  }

  render() {
    const { redirectToNextStep } = this.state;

    if (redirectToNextStep) {
      return (
        <Redirect to="/start/location" />
      );
    }

    return (
      <div>
        <TopBar />
        <SideBar />
        <div className="dashboard-content fb">
          <div className="form-container">
            <h1>Establecimientos</h1>
            <p>
              Escoge una imagen con la que puedas identiricar a tu Empresa, puede
               ser tu logo, foto de la fachada o algo que tu relaciones directamente con ella.
            </p>
            <form onSubmit={this.saveLocation} className="">
              <div className="fb">
                <div className="col one-half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre*"
                    className=""
                  />
                  <p>Direccion</p>
                  <input
                    type="text"
                    name="streetAndNumber"
                    placeholder="Calle y número*"
                    className=""
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="Ciudad*"
                    className=""
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="Estado*"
                    className=""
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Código Postal*"
                    className=""
                  />
                </div>
                <div className="col one-half">
                  <p>¿Cuántas personas laboran en este Establecimiento?</p>
                  <select name="people">
                    <option value="100-200">0-20</option>
                    <option value="100-200">20-50</option>
                    <option value="100-200">50-100</option>
                    <option value="100-200">100-200</option>
                    <option value="100-200">200-500</option>
                  </select>
                </div>
              </div>
              <input
                type="submit"
                className="button"
                value="Continuar"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

NewLocation.propTypes = {
  saveLocation: PropTypes.func.isRequired,
};

export default NewLocation;
