import * as React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './style.css';

class Navigation extends React.Component {
  render () {
  return (
    <>
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
    <div className="container-fluid">
    <Link className="navbar-brand text-primary" to="/">Confectionary Delight</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
    <li className="nav-item">
    <Link className="nav-link text-primary" to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-primary" to="/menu">Menu</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-primary" to="/about">About</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-primary" to="/contact">Contact</Link>
    </li>
    <li className="nav-item dropdown">
    <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Home</a></li>
    <li><a className="dropdown-item" href="/menu">Menu</a></li>
    <li><a className="dropdown-item" href="/about">About</a></li>
    <li><a className="dropdown-item" href="/contact">Contact</a></li>
    </ul>
    </li>
    </ul>
    </div>
    </div>
    </nav><div className="container-fluid mt-3">
    </div>
</>
    );
  }
};
export default Navigation;