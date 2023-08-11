import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" id="top_nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="assets/image/logo.webp" width="100px" height="300%" alt="" className="img-fluid" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" id="searchform">
              <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" id="searchbox" />
              <button className="btn btn-outline-success" type="submit" id="searchbtn"><i className="bi bi-search"></i></button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
