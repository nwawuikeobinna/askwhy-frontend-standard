import React from "react";

const InputComponent = ({
  name,
  value,
  onChange,
  type,
  className,
  placeholder,
}) => {
  return (
    <div className="form-group">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={className ? className : "form-control form-control-lg"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
