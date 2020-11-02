import React from "react";
import propTypes from "prop-types"; // type checking

const FormLayout = ({ title, text, style, children }) => {
  return (
    <>
      <div className={style ? style : "auth"}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{title}</h1>
              <small className="text-left"></small>
              <p className="lead text-center">{text}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FormLayout.propTypes = {
  title: propTypes.string.isRequired,
  style: propTypes.bool,
  text: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default FormLayout;
