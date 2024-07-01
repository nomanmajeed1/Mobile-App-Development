import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="fixed-top nbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav fw-bold gap-4 mt-2">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link text-dark text-decoration-none fs-5 active_class"
                        : "nav-link text-dark text-decoration-none fs-5"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? "nav-link active_class" : "nav-link"
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/project"
                    className={({ isActive }) =>
                      isActive ? "nav-link active_class" : "nav-link"
                    }
                  >
                    Project
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/team"
                    className={({ isActive }) =>
                      isActive ? "nav-link active_class" : "nav-link"
                    }
                  >
                    Team
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "nav-link active_class" : "nav-link"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink>
                    <img
                      src="images/a.png"
                      alt="logo"
                      height="25px"
                      width="23px"
                    />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
