import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../image/Art Perfumery (1).png";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const user = useSelector((state) => state.user);

  // Vérifiez si l'utilisateur a le rôle "admin"
  const isAdmin = user && user.role === "admin";

  // fixed Header
  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else if (window.scrollY <= 50) {
      setIsFixed(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={isFixed ? "navbar fixed" : "navbar"}
    >
      <Container className="navbar-container">
        <Navbar.Brand>
          <span className="plogo">
            <span className="a">A</span>rt P
            <span className="per">erfumery</span>
          </span>
        </Navbar.Brand>
        <div className="d-flex">
          <div className="media-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="nav-icon"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            <Link
              aria-label="Go to Cart Page"
              to="/cart"
              className="cart"
              data-num={cartList.length}
            >
              <CiShoppingCart className="nav-icon" />
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              setExpand(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Item>
              <Link
                aria-label="Go to Home Page"
                className="navbar-link"
                to="/"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Home</span>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label="Go to Shop Page"
                className="navbar-link"
                to="/shop"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Shop</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                aria-label="Go to Cart Page"
                className="navbar-link"
                to="/contact"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Contact Us</span>
              </Link>
            </Nav.Item>
            {isAdmin && (
              <Nav.Item>
                <Link to="/dashboard" className="navbar-link">
                  <span className="nav-link-label">Dashboard</span>
                </Link>
              </Nav.Item>
            )}
            <Nav.Item className="expanded-cart">
              <Link to="/signin">
                <LuUser2 className="signin-icon" />
              </Link>
              <Link
                aria-label="Go to Cart Page"
                to="/cart"
                className="cart"
                data-num={cartList.length}
              >
                <HiOutlineShoppingBag className="cart-icon" />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
