import React from 'react';
import PropTypes from 'prop-types';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.register = this.register.bind(this);
  }

  register(event) {
    const data = new FormData(event.target);
    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');
    event.preventDefault();
    this.props.doRegister({ name, email, password });
  }

  render() {
    return (
      <div className="fb">
        <div className="col one-half">
          <div className="register-container">
            <h1>Bienvenido a la plataforma de Energy Watcher</h1>
            <p>¿Estás listo para empezar a ahorrar energía?</p>
            <form onSubmit={this.register}>
              <div className="">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre*"
                  className=""
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className=""
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Teléfono*"
                  className=""
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="C.P*"
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
                  name="city"
                  placeholder="Municipio*"
                  className=""
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password : "
                  className=""
                />
                <label htmlFor="terms">
                  <input
                    type="checkbox"
                    name="terms"
                  />
                Acepto los Terminos y Condiciones
                </label>
                <label htmlFor="privacy">
                  <input
                    type="checkbox"
                    name="privacy"
                  />
                Acepto la Politica de Privacidad
                </label>
                <input
                  type="submit"
                  className="button"
                  value="Continuar"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="col one-half">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  doRegister: PropTypes.func.isRequired,
};

export default Register;
