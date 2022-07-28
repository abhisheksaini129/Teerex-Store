import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Pages/Styles/Navbar.css";
function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <div className="Nav-bar">
      <Link className="navLink-product logo" to="/">
      <span className="logo"> TeeRex Store</span>
          </Link>
      <div className="Navlinks">
        <div className="productLink">
          <Link className="navLink-product" to="/">
            {" "}
            Products
          </Link>
        </div>
        <div className="cartIcon">
          <Link className="navLink-cart" to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.6 0 2.025.975.425.975-.275 2.175L34.7 23.25q-.5.85-1.4 1.475-.9.625-1.95.625H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z" />
            </svg>
            <span className="CartCount">{items.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
