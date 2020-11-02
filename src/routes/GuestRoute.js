import React from "react";
import PropTypes from "prop-types"; // type checking
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/user/dashboard" />
      )
    }
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return { isAuthenticated: !!localStorage.token }; // !! => returns a boolean-(true or false)
};

export default connect(mapStateToProps)(GuestRoute);
