import React, { useState } from "react";
import "./index.css";
import InputComponent from "../../../form-elements/InputComponent";
import { connect } from "react-redux";
import { signup } from "../../../../redux/actions/auth";
import Spinner from "../../../spinner";
// import { Link } from "react-router-dom";

const Register = ({ loading, message, signup, history }) => {
  const [state, setState] = useState({
    name: "",
    password: "",
    email: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    if ((name, email, password)) {
      signup(payload, history);
    }
  };

  const { name, email, password } = state;

  return (
    <div className="register">
      {/* <Link to="/" className="">
        <button className="btn btn-outline-dark ml-2 mt-2">Go Back</button>
      </Link> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 container-header">
            <h3>
              Ask<span>W</span>hy
            </h3>
            <h2>
              Create an account with Ask<span>W</span>hy today!.
            </h2>
          </div>
          <div className="col-md-6 register-form">
            <form onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="email">Name</label>
              <InputComponent
                name="name"
                value={name}
                onChange={onChange}
                type="text"
                placeholder="Name"
              />
              <label htmlFor="email">Email</label>
              <InputComponent
                name="email"
                value={email}
                onChange={onChange}
                type="email"
                placeholder="Email Address"
              />
              <label htmlFor="email">Password</label>
              <InputComponent
                name="password"
                value={password}
                onChange={onChange}
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
              />
              {loading && <Spinner />}
              {message && <p className="text-danger p-2">{message}</p>}
              <button type="submit" className="btn btn-outline-secondary mb-5 mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProp = {
  signup,
};

const mapStateToProp = (state) => {
  return {
    loading: state.request.loading,
    message: state.display.message,
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(Register);
