import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Product() {
    return (
        <div class="product">
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div class="m-3 p-4">
                    <FontAwesomeIcon icon={faCartShopping}  size="xl" beat />
                    </div>
            </div>
        </nav>
        </div>
    );
}

export default Product