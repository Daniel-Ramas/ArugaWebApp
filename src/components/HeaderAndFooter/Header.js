import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//react router dom
import { Link } from "react-router-dom";

import "./Header.css";

export default function () {
  return (
    <>
      <Navbar className="custom-nav-bar">
        <Navbar.Brand className="brand-name">Aruga App</Navbar.Brand>
        <Nav.Link>
          <Link to="/" className="home-link">
            Home
          </Link>
        </Nav.Link>
        <Nav.Link className="brands-link">Brands</Nav.Link>
        <Nav.Link>
          <Link to="/artists" className="influencers-link">
            Influencers
          </Link>
        </Nav.Link>
      </Navbar>
    </>
  );
}
