import React from "react";
import propTypes from "prop-types"; // type checking
import Footer from "./Footer";

const AuthLayout = ({ title, text, style, children }) => {
  return (
    <>
      <div className={style ? style : "auth"}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{title}</h1>
              <p className="lead text-center">{text}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

AuthLayout.propTypes = {
  title: propTypes.string.isRequired,
  style: propTypes.string,
  text: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default AuthLayout;
