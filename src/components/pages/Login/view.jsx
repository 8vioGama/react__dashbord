import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(event) {
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    event.preventDefault();
    this.props.doLogin({ email, password });
  }

  render() {
    return (
      <div className="fb">
        <div className="col one-half">
          <div className="register-container">
            <h1>Bienvenido a la plataforma de Energy Watcher</h1>
            <form onSubmit={this.login}>
              <div className="">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className=""
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password : "
                  className=""
                />
                <input
                  type="submit"
                  className="button"
                  value="Entrar"
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

Login.propTypes = {
  doLogin: PropTypes.func.isRequired,
};

export default Login;
