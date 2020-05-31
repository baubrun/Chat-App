import React from "react";




const Button = ({ type, onclick, value }) => {
  return <button onClick={onclick} type={type}>{value}</button>;
};

export default Button;
