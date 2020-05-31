import React from 'react'

const FormInput = ({
    id,
    name,
    onChange,
    placeholder,
    type,
    value,

}) => {
  return(
    <>
    <input 
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    </>
  )
}

export default FormInput
