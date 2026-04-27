import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "FFF"}}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="Media/Images/logo.svg" alt="Logo" style={{width:"30%"}}/>
          </Link>
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
            
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item p-1 mx-2">
                <Link className="nav-link text-muted active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item p-1 mx-2">
                <Link className="nav-link text-muted active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item p-1 mx-2">
                <Link className="nav-link text-muted active" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item p-1 mx-2">
                <Link className="nav-link text-muted active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item p-1 mx-2">
                <Link className="nav-link text-muted active" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item p-1 mx-2">
                <a className="nav-link text-muted active" href="#">
                  <i className="fa fa-bars" style={{fontSize: "1.2rem"}}aria-hidden="true"></i>
                </a>
              </li>
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
