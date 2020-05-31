import React from "react";
import PropTypes from "prop-types";
import "./Title.css"

const Title = ({id, text}) => {
  return <h1 id={id} className="title">{text}</h1>;
};


Title.propTypes = {
  title: PropTypes.string
}

export default Title;
