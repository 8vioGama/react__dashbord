import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import TopBar from '../../../controls/TopBar/TopBar';
import SideBar from '../../../controls/SideBar/SideBar';

class NewCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToNextStep: false,
    };

    this.saveCompany = this.saveCompany.bind(this);
  }


  saveCompany(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const newCompany = {
      name: data.get('name'),
      address: {
        streetAndNumber: data.get('streetAndNumber'),
        city: data.get('city'),
        state: data.get('state'),
        postalCode: data.get('postalCode'),
      },
      activity: data.get('activity'),
      people: data.get('people'),
    };

    this.props.saveCompany(newCompany)
      .then(() => {
        console.log('Company saved');
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
            <h1>Comencemos con los datos de tu empresa</h1>
            <p>Recuerda que puedes tener una o más empresas registradas.</p>
            <p>
              Escoge una imagen con la que puedas identiricar a tu Empresa, puede
               ser tu logo, foto de la fachada o algo que tu relaciones directamente con ella.
            </p>
            <form onSubmit={this.saveCompany} className="">
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
                  <p>¿Cuál es el giro de tu Empresa?</p>
                  <label htmlFor="comercio"><input id="comercio" type="radio" value="comercio" name="activity" /> Comercio</label>
                  <label htmlFor="servicios"><input id="servicios" type="radio" value="servicios" name="activity" /> Servicios</label>
                  <label htmlFor="industria"><input id="industria" type="radio" value="industria" name="activity" /> Industria</label>
                  <p>¿Cuántas personas laboran en tu empresa?</p>
                  <select name="people">
                    <option value="100-200">0-100</option>
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

NewCompany.propTypes = {
  saveCompany: PropTypes.func.isRequired,
};

export default NewCompany;
