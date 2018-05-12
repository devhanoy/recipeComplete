import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  changePassword,
  changeUsername,
  doLogin
} from "../actions/login.action";

export function LoginForm(props) {
  return (
    <section id="content">
      <form
        className="pure-form pure-form-aligned"
        action="/login"
        method="post"
      >
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="login">Login: </label>
            <input
              id="login"
              name="login"
              type="text"
              placeholder="Nom d'utilisateur"
              value={props.username}
              onChange={event => props.changeUsername(event.target.value)}
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="password">Mot de passe: </label>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Mot de passe"
              onChange={event => props.changePassword(event.target.value)}
            />
          </div>
          <div className="pure-controls">
            <button
              className="pure-button pure-button-primary"
              type="reset"
              onClick={event => props.login()}
            >
              Login
            </button>
          </div>
          {props.error && <div>{props.error}</div>}
        </fieldset>
      </form>
    </section>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func,
  changeUsername: PropTypes.func,
  changePassword: PropTypes.func,
  username: PropTypes.string,
  error: PropTypes.string
};

const mapStateToProps = ({ username, error }) => {
  return {
    username,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: doLogin(dispatch),
    changeUsername: changeUsername(dispatch),
    changePassword: changePassword(dispatch)
  };
};

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoginForm
);
