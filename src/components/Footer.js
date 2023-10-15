import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



const Style3 = {
    backgroundColor: '#db6930',
  };

const Style1 = {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  };

  const Style2 = {
    backgroundColor: '#54456b',
  };

function Footer() {
  return (
<div class="container my-5">
<footer class="text-center text-lg-start" style={Style3}>
  <div class="container d-flex justify-content-center py-5">
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={Style2}>
    <FontAwesomeIcon icon={faFacebook} beat />
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={Style2}>
    <FontAwesomeIcon icon={faInstagram} beat />
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={Style2}>
    <FontAwesomeIcon icon={faWhatsapp} beat />
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={Style2}>
    <FontAwesomeIcon icon={faTwitter} beat />
    </button>
  </div>
  <div class="text-center text-white p-3" style={Style1}>
    © 2020 Copyright:
    <a class="text-white">Pilico.com</a>
  </div>
</footer>
</div>

  );
}

export default Footer;
