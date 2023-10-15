import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div class="stick">
<nav className="navbar navbar-expand-md bg-body-tertiary">
  <div class="container-fluid">
  <Link className="navbar-brand" to="/">LOGO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link className="nav-link m-3 fs-4" to="/">Home</Link>
        <Link className="nav-link m-3 fs-4" to="/products">Products</Link>
        <a class="nav-link m-3 fs-4" href="#">About</a>
        <a class="nav-link m-3 fs-4" href="#">Contact Us</a>
      </div>
    </div>
  </div>
  </nav>
  </div>
  );
}

export default Navbar;