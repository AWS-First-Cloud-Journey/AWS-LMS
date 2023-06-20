import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import awsLogo from "../../assets/awsLogo1.png";

function Header() {
  return (
    <header className="dashboard">
      <div className="container">
        <div className="header-left">
          <Link className="logo-home">
            <div className="logo">
              <img className="img-full" src={awsLogo}></img>
            </div>
            <span className="web-title">AWS Cloud Solutions Academy</span>
          </Link>
          <div className="header-left">
            <div className="nav">
              <div
                className="dropdown btn-dropdown"
                style={{ cursor: "pointer" }}
              >
                <span>Dashboard</span>
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="header-right">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-circle-question"></i>
          <div className="dropdown btn-dropdown" style={{ cursor: "pointer" }}>
            <span>Username</span>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
