import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserNavbar({ setAuth }) {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("UserToken");
    localStorage.removeItem("UserId");
    toast.success("Logout");
    setAuth(false);
  };

  return (
    <div className="mb-5 pb-5">
      <nav className="navbar-shadow navbar navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container">
          <a href="/UserHome" className="navbar-brand m-3">
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
                    <a href="/UserProfile" className="dropdown-item">
                      Profile
                    </a>
                    <a
                      href="/Login"
                      className="dropdown-item"
                      onClick={() => logout()}
                    >
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
