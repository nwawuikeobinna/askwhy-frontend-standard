import React, { useEffect } from "react";
import { connect } from "react-redux";
import { currentUser } from "./redux/actions";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

const App = ({ children, currentUser }) => {

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthorizationHeader(token);
    currentUser();
  });

  return <>{children}</>;
};

const mapDispatchToProp = {
  currentUser,
};

export default connect(null, mapDispatchToProp)(App);
