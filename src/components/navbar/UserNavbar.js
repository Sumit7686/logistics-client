import React from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function UserNavbar() {
  const history = useHistory();

  return (
    <div className="mb-5 pb-5">
      <nav className="navbar-shadow navbar navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container">
          <a href="/" className="navbar-brand m-3">
            <span onClick={() => history.push("/")}>
              <img
                src="/photos/logo.jpg"
                alt="logo"
                className="has-retina img-responsive"
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ml-auto">
              <ul className="header nav navbar-nav navbar-right">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/AboutUs"
                    activeClassName="active"
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink
                    className="nav-link"
                    to="/Services"
                    activeClassName="active"
                  >
                    Order List
                  </NavLink>
                </li>
                <li className="nav-item dropdown px-5 active">
                  <a
                    className="name-btn nav-link dropdown-toggle btn rounded p-2"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    // aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    Welcome
                  </a>
                  <div
                    className="dropdown-menu text-center"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a href="/Login" className="dropdown-item">
                      Login
                    </a>
                    <a href="/UserRegister" className="dropdown-item">
                      UserRegister
                    </a>
                    <a href="/DeliveryBoyRegister" className="dropdown-item">
                      DeliveryBoyRegister
                    </a>
                    <a href="/Login" className="dropdown-item">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
