import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = ({ chatRoom }) => {
  return (
    <div className="header">
      <div className="header-left">
        <i class="far fa-comment-alt fa-2x chat-icon"></i>
        <div className="room-title">{chatRoom}</div>
      </div>
      <div className="header-right">
        <Link to="/">
          <i class="fas fa-power-off fa-2x"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
