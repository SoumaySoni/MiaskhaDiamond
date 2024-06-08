import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fw-bolder" href="/">
          Miaksha Diamonds
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Retail Tools
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Coustumer Stories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Ethical Practies
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    FAQs
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="/">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" aria-disabled="true">
                Sell With Us
              </a>
            </li>
          </ul>

          <div className="log-in">
            <ul className="navbar-nav d-flex me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link demo" href="/">
                  Schedule Demo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Log In
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link ">Join For Free</a>
              </li> */}
              <button className="nav-item" href="/">
                Join For Free
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
