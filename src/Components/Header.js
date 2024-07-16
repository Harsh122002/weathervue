import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 text-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark-subtle  rounded p-lg-3 ">
        <a className="navbar-brand" href="#">
          Weather
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/Forecast">
              Forecast
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
