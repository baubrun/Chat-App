import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css"


const Header = ({ chatRoom }) => {
  return (
    <div className="header">
      <div className="header-left">
        <i className="far fa-comment-alt fa-2x chat-icon"></i>
        <div className="room-title">{chatRoom}</div>
      </div>
      <div className="header-right">
        <Link to="/">
          <i className="fas fa-power-off fa-2x"></i>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  chatRoom: PropTypes.string
}

export default Header;
