import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "FFF"}}>
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src="Media/Images/logo.svg" alt="Logo" style={{width:"30%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item p-1 mx-2">
                <Link class="nav-link text-muted active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item p-1 mx-2">
                <Link class="nav-link text-muted active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item p-1 mx-2">
                <Link class="nav-link text-muted active" to="/products">
                  Product
                </Link>
              </li>
              <li class="nav-item p-1 mx-2">
                <Link class="nav-link text-muted active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item p-1 mx-2">
                <Link class="nav-link text-muted active" to="/support">
                  Support
                </Link>
              </li>
              <li class="nav-item p-1 mx-2">
                <a class="nav-link text-muted active" href="#">
                  <i class="fa fa-bars" style={{fontSize: "1.2rem"}}aria-hidden="true"></i>
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
