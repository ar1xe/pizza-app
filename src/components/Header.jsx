import React from "react";
import logoApp from "../assets/img/pizza-logo.svg";
import { Link } from "react-router-dom";
import ShoppingCartLogo from "../assets/img/ShoppingCartLogo";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width="38" src={logoApp} alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <Search />
          <div className="header__cart">
            <Link to="/cart" className="button button--cart">
              <span>520 ₽</span>
              <div className="button__delimiter"></div>
              <ShoppingCartLogo />
              <span>3</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
