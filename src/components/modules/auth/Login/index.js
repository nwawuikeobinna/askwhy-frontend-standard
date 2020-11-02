import React, { useState } from "react";
import "./index.css";
import { connect } from "react-redux";
import { login } from "../../../../redux/actions";
import InputComponent from "../../../form-elements/InputComponent";
import Spinner from "../../../spinner";


const Login = ({ login, loading, message, history }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    if ((email, password)) {
      login(payload, history);
    }
  };

  const { email, password } = state;

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 container-header">
            <h3>
              Ask<span>W</span>hy
            </h3>
            <h2>
              Sign in to your Ask<span>W</span>hy account.
            </h2>
          </div>
          <div className="col-md-6 login-form">
            <form onSubmit={onSubmit} autoComplete="off">
              <label htmlFor="email">Email</label>
              <InputComponent
                name="email"
                value={email}
                type="email"
                onChange={onChange}
                className="form-control form-control-lg mb-4"
                placeholder="Email address"
                disabled={loading}
              />

              <label htmlFor="password">Password</label>
              <InputComponent
                name="password"
                value={password}
                type="password"
                onChange={onChange}
                className="form-control form-control-lg"
                placeholder="Password"
                disabled={loading}
              />

              {loading && <Spinner />}
              {message && <p className=' text-danger p-2'>{message}</p>}

              <InputComponent
                name="submit"
                type="submit"
                disabled={loading}
                className="btn btn-outline-secondary text-dark btn-sm mt-4"
              />
            </form>
            <p className="login-paragraph">
              Don't have an account? <a href="/register" className="text-primary">sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProp = {
  login,
};

const mapStateToProp = (state) => {
  return {
    loading: state.request.loading,
    message: state.display.message,
    profile: state.profiles.profile,
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(Login);
