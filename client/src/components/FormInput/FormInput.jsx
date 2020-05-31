import React from "react";
import "./FormInput"

const FormInput = ({
  name,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <>
      <input 
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </>
  );
};

export default FormInput;
