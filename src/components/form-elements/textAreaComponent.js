import React from "react";
import PropTypes from "prop-types";

const TextAreaComponent = ({
  name,
  value,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <div className="form-group">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={className ? className : "form-control form-control-lg"}
        placeholder={placeholder}
      />
    </div>
  );
};

TextAreaComponent.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextAreaComponent;
