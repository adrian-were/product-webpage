import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div class="stick">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link className="nav-link m-3 fs-4" to="/">Home</Link>
        <Link className="nav-link m-3 fs-4" to="/products">Products</Link>
        <a class="nav-link m-3 fs-4" href="#">About</a>
        <a class="nav-link m-3 fs-4" href="#">Contact Us</a>
        <i class="fab fa-facebook-f" style={{color: '#3B5998'}}></i>
      </div>
    </div>
  </div>
  </nav>
  </div>
  );
}

export default Navbar;